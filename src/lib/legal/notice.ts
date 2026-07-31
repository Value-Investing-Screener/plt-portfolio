import { COMPANY, HOST } from "./company";
import { list, p, rows, type LegalDocument } from "./types";

/** Mentions légales du site www.parlons-long-terme.com. */
export const LEGAL_NOTICE: LegalDocument = {
  title: "Mentions légales",
  lead: "Identité de l'éditeur du site, de son hébergeur, et conditions d'utilisation des contenus publiés.",
  updatedAt: "31 juillet 2026",
  sections: [
    {
      title: "Éditeur du site",
      blocks: [
        rows(
          ["Dénomination sociale", COMPANY.name],
          ["Forme juridique", COMPANY.legalForm],
          ["Numéro d'immatriculation", COMPANY.registryCode],
          ["Numéro de TVA intracommunautaire", COMPANY.vatNumber],
          ["Capital social", COMPANY.shareCapital],
          ["Date d'immatriculation", COMPANY.registeredOn],
          ["Siège social", COMPANY.address],
          ["Activité déclarée", COMPANY.activity],
          ["Représentant légal", COMPANY.director],
          ["Directeur de la publication", COMPANY.director],
          ["Contact", COMPANY.email]
        ),
        p(
          `La société est immatriculée au registre du commerce estonien (Äriregister) sous le numéro ${COMPANY.registryCode}.`
        ),
      ],
    },
    {
      title: "Hébergement",
      blocks: [
        p(
          `Le site est hébergé par ${HOST.name}, ${HOST.address} - ${HOST.site}.`
        ),
      ],
    },
    {
      title: "Nature des contenus",
      blocks: [
        p(
          "Les contenus publiés sur ce site (articles, analyses, vidéos, newsletter, supports pédagogiques) sont proposés à visée pédagogique et informative. Ils ne constituent en aucun cas un conseil en investissement, une recommandation personnalisée, une offre ou une sollicitation d'acheter ou de vendre un instrument financier."
        ),
        p(
          "ParlonsLongTerme OÜ ne fournit aucun service d'investissement au sens de la directive 2014/65/UE du 15 mai 2014 concernant les marchés d'instruments financiers (« MiFID II »), en particulier aucun conseil en investissement ni service de gestion de portefeuille. La société ne détient aucun instrument financier pour le compte de ses lecteurs ou clients, n'y a aucun accès, et ne reçoit, ne transmet ni n'exécute aucun ordre pour leur compte."
        ),
        p(
          "Investir comporte des risques de perte en capital. Les performances passées ne préjugent pas des performances futures. Chaque lecteur reste seul décisionnaire de ses opérations et il lui appartient de solliciter, avant toute décision, l'avis de professionnels compétents au regard de la réglementation et de la fiscalité applicables dans son pays de résidence."
        ),
      ],
    },
    {
      title: "Propriété intellectuelle",
      blocks: [
        p(
          "L'ensemble des éléments du site (textes, analyses, chartes graphiques, logos, marques, photographies, vidéos, bases de données et développements logiciels) est protégé par le droit de la propriété intellectuelle et demeure la propriété exclusive de ParlonsLongTerme OÜ ou de ses partenaires."
        ),
        p(
          "Toute reproduction, représentation, adaptation, diffusion ou exploitation, totale ou partielle, par quelque procédé que ce soit et sur quelque support que ce soit, sans autorisation écrite préalable, est interdite et susceptible de constituer un acte de contrefaçon. La citation d'extraits courts reste permise sous réserve d'indiquer clairement la source et un lien vers la page d'origine."
        ),
      ],
    },
    {
      title: "Liens hypertextes",
      blocks: [
        p(
          "Le site renvoie vers des ressources extérieures : plateformes de diffusion, sites partenaires, boutiques en ligne. ParlonsLongTerme OÜ n'exerce aucun contrôle sur ces ressources et décline toute responsabilité quant à leur contenu, leur disponibilité et l'usage qui en est fait."
        ),
        p(
          "La mise en place d'un lien vers le site est libre, sous réserve qu'elle ne porte pas atteinte à l'image de ParlonsLongTerme OÜ et n'entretienne pas de confusion sur l'origine des contenus."
        ),
      ],
    },
    {
      title: "Signalement et réclamations",
      blocks: [
        p(
          `Toute question relative au site, toute demande de retrait d'un contenu ou toute réclamation peut être adressée à ${COMPANY.email}, ou par courrier au siège social indiqué ci-dessus.`
        ),
        list(
          "Un accusé de réception est adressé dans les meilleurs délais.",
          "Les demandes relatives aux données personnelles sont traitées selon les modalités décrites dans la politique de confidentialité."
        ),
      ],
    },
  ],
};
