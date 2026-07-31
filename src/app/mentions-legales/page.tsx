import type { Metadata } from "next";

import { LegalPage } from "@/components/site/LegalPage";
import { LEGAL_NOTICE } from "@/lib/legal/notice";

export const metadata: Metadata = {
  title: LEGAL_NOTICE.title,
  description: LEGAL_NOTICE.lead,
};

export default function MentionsLegalesPage() {
  return <LegalPage document={LEGAL_NOTICE} />;
}
