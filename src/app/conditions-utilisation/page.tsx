import type { Metadata } from "next";

import { LegalPage } from "@/components/site/LegalPage";
import { TERMS } from "@/lib/legal/terms";

export const metadata: Metadata = {
  title: TERMS.title,
  description: TERMS.lead,
};

export default function ConditionsUtilisationPage() {
  return <LegalPage document={TERMS} />;
}
