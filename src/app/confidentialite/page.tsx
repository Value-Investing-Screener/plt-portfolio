import type { Metadata } from "next";

import { LegalPage } from "@/components/site/LegalPage";
import { PRIVACY } from "@/lib/legal/privacy";

export const metadata: Metadata = {
  title: PRIVACY.title,
  description: PRIVACY.lead,
};

export default function ConfidentialitePage() {
  return <LegalPage document={PRIVACY} />;
}
