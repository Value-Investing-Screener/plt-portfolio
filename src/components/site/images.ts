/**
 * Photos du site vitrine.
 *
 * Les fichiers vivent dans `public/site/`. Quand `src` vaut `null` — ou que le
 * fichier ne se charge pas — `<Figure>` retombe sur le calage rayé du
 * prototype et affiche `caption` : la page reste présentable, et il suffit de
 * déposer la photo puis de renseigner son chemin ici.
 */
export type SiteImage = {
  /** Chemin public, ou `null` tant qu'aucune photo n'est retenue. */
  src: string | null;
  alt: string;
  /** Légende du calage, affichée tant que la photo manque. */
  caption: string;
};

export const IMAGES = {
  heroPortrait: {
    src: "/site/hero-plt.jpg",
    alt: "Enseigne Parlons Long Terme dans le hall de l'événement",
    caption: "photo — Rémi en conférence",
  },

  // À fournir : un portrait vertical de Rémi et une vue de scène / public.
  bioPortrait: {
    src: "/site/remi-de-truchis-portrait.jpg",
    alt: "Portrait de Rémi De Truchis De Varennes",
    caption: "photo — portrait",
  },
  bioStage: {
    src: "/site/remi-de-truchis-stage.png",
    alt: "Rencontre Parlons Long Terme devant le public",
    caption: "photo — scène / public",
  },

  bookCover: {
    // Détourée sur fond transparent : WebP, le PNG équivalent pesait 8 fois plus.
    src: "/site/livre-small-caps.webp",
    alt: "Couverture de « Surperformez en bourse avec les small caps »",
    caption: "couverture — Surperformez en bourse avec les small caps",
  },
  newsletter: {
    src: "/site/newsletter.jpg",
    alt: "« L'analyse du mois », la newsletter Parlons Long Terme",
    caption: "image — newsletter / communauté",
  },
  screener: {
    src: "/site/value-investing-screener.jpg",
    alt: "Interface du logiciel Value Investing Screener",
    caption: "capture — Value Investing Screener",
  },
  familyOffice: {
    // Variante disponible sans personnes, cadrage vertical de la réception :
    // `/site/plt-family-office-bis.jpg`.
    src: "/site/plt-family-office.jpg",
    alt: "Rémi De Truchis De Varennes sur le stand PLT Family Office",
    caption: "image — accompagnement patrimonial",
  },

  // À fournir : une photo de rencontre du club d'affaires.
  insider: {
    src: "/site/plt-insider.png",
    alt: "Rencontre du club d'affaires PLT Insider",
    caption: "photo — rencontre / club privé",
  },
} as const satisfies Record<string, SiteImage>;
