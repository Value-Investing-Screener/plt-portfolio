/**
 * Identité de l'éditeur, telle qu'inscrite au registre du commerce estonien
 * (Äriregister, fiche 16184092). Ces valeurs sont reprises dans les trois
 * documents légaux : un seul endroit à corriger si une donnée change.
 */
export const COMPANY = {
  name: "ParlonsLongTerme OÜ",
  legalForm: "Osaühing (OÜ) : société à responsabilité limitée de droit estonien",
  registryCode: "16184092",
  vatNumber: "EE102350153",
  registeredOn: "15 mars 2021",
  shareCapital: "2 500 €",
  address:
    "Vesivärava tn 50-201, Kesklinna linnaosa, Tallinn, Harju maakond, 10152, Estonie",
  activity: "Autres activités d'information (code EMTAK 63921)",
  director: "Rémi Thomas Jean De Truchis de Varennes",
  email: "remi@parlons-long-terme.com",
  site: "www.parlons-long-terme.com",
} as const;

/**
 * Hébergeur du site. À corriger ici si le déploiement change de plateforme.
 */
export const HOST = {
  name: "Vercel Inc.",
  address: "440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis",
  site: "vercel.com",
} as const;

/**
 * Prestataires traitant des données personnelles pour le compte de
 * ParlonsLongTerme. Liste tenue à jour avec les services réellement branchés
 * sur le site et l'espace membre.
 */
export const PROCESSORS: [string, string][] = [
  ["Vercel Inc. (États-Unis)", "Hébergement du site et journaux techniques"],
  [
    "Supabase Inc. (États-Unis, données hébergées dans l'UE)",
    "Comptes de l'espace membre, contenus et documents",
  ],
  [
    "Twilio SendGrid (États-Unis)",
    "Envoi des e-mails de l'espace membre (invitation, réinitialisation, comptes rendus)",
  ],
  [
    "Intuit Mailchimp (États-Unis)",
    "Gestion et envoi de la newsletter Parlons Long Terme",
  ],
];
