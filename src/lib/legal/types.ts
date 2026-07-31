/**
 * Structure commune aux documents légaux du site vitrine.
 *
 * Le texte est stocké en données plutôt qu'en JSX : un document légal se
 * relit, se fait valider et se met à jour sans toucher au rendu, et la même
 * mise en page sert les trois pages.
 */

export type LegalBlock =
  /** Paragraphe simple. */
  | { kind: "p"; text: string }
  /** Liste à puces. */
  | { kind: "list"; items: string[] }
  /** Paires libellé / valeur — identité de l'éditeur, sous-traitants… */
  | { kind: "rows"; rows: [string, string][] };

export type LegalSection = {
  title: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  /** Titre affiché en tête de page. */
  title: string;
  /** Phrase de chapeau, sous le titre. */
  lead: string;
  /** Date de dernière révision, en toutes lettres. */
  updatedAt: string;
  sections: LegalSection[];
};

/** Raccourcis d'écriture des documents. */
export const p = (text: string): LegalBlock => ({ kind: "p", text });
export const list = (...items: string[]): LegalBlock => ({
  kind: "list",
  items,
});
export const rows = (...rows: [string, string][]): LegalBlock => ({
  kind: "rows",
  rows,
});
