"use client";

import { useState } from "react";

import { CgvModal } from "./CgvModal";
import { Footer } from "./Footer";

/** Pied de page + modale CGV — partagés par toutes les pages de l'espace. */
export const FooterCgv = () => {
  const [cgvOpen, setCgvOpen] = useState(false);

  return (
    <>
      <Footer onOpenCgv={() => setCgvOpen(true)} />
      {cgvOpen && <CgvModal onClose={() => setCgvOpen(false)} />}
    </>
  );
};
