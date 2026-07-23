import { NextResponse, type NextRequest } from "next/server";

import { getCurrentMember } from "@/lib/auth";
import { DOCUMENTS_BUCKET } from "@/lib/plt/documents";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/** Tables susceptibles de référencer un document du bucket privé. */
const DOCUMENT_TABLES = ["plt_publication_report", "plt_annual_review"];

/**
 * Autorisation par la RLS : on interroge la base **avec la session du membre**.
 * Un document rattaché à une publication non publiée est donc invisible, et la
 * requête ne renvoie rien — inutile de rejouer la règle ici.
 */
const isReadable = async (storagePath: string) => {
  const supabase = createSupabaseServerClient();

  for (const table of DOCUMENT_TABLES) {
    const { data } = await supabase
      .from(table)
      .select("storage_path")
      .eq("storage_path", storagePath)
      .maybeSingle();

    if (data) return true;
  }

  return false;
};

export async function GET(
  _request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  const member = await getCurrentMember();
  if (!member) {
    return NextResponse.json({ error: "Session requise." }, { status: 401 });
  }

  const storagePath = params.path.join("/");

  if (!(await isReadable(storagePath))) {
    return NextResponse.json({ error: "Document introuvable." }, { status: 404 });
  }

  // URL de courte durée : le lien copié depuis la barre d'adresse expire vite.
  const { data, error } = await createSupabaseAdminClient()
    .storage.from(DOCUMENTS_BUCKET)
    .createSignedUrl(storagePath, 60);

  if (error || !data) {
    return NextResponse.json(
      { error: "Document indisponible." },
      { status: 404 }
    );
  }

  return NextResponse.redirect(data.signedUrl);
}
