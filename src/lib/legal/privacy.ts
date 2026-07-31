import { COMPANY, PROCESSORS } from "./company";
import { list, p, rows, type LegalDocument } from "./types";

/**
 * Politique de confidentialité.
 *
 * Décrit les traitements réellement mis en œuvre par le site : inscription à
 * la newsletter, comptes de l'espace membre, e-mails transactionnels et
 * journaux d'hébergement. Toute nouvelle brique technique traitant des
 * données personnelles doit être ajoutée ici et dans `PROCESSORS`.
 */
export const PRIVACY: LegalDocument = {
  title: "Politique de confidentialité",
  lead: "Quelles données sont collectées, pourquoi, pendant combien de temps, et comment exercer vos droits.",
  updatedAt: "31 juillet 2026",
  sections: [
    {
      title: "Responsable de traitement",
      blocks: [
        rows(
          ["Responsable", COMPANY.name],
          ["Siège social", COMPANY.address],
          ["Numéro d'immatriculation", COMPANY.registryCode],
          ["Contact", COMPANY.email]
        ),
        p(
          "Aucun délégué à la protection des données n'a été désigné : les traitements mis en œuvre ne relèvent pas des cas de désignation obligatoire prévus à l'article 37 du RGPD. Les demandes relatives aux données personnelles sont traitées directement à l'adresse de contact ci-dessus."
        ),
      ],
    },
    {
      title: "Données collectées et finalités",
      blocks: [
        p(
          "Le site ne collecte que les données nécessaires aux finalités décrites ci-dessous. Aucune donnée n'est demandée pour la simple consultation des pages publiques."
        ),
        rows(
          [
            "Inscription à la newsletter",
            "Adresse e-mail, et prénom s'il est renseigné : pour l'envoi des publications, des informations sur les événements et les offres. Base légale : consentement.",
          ],
          [
            "Compte de l'espace membre",
            "Nom, adresse e-mail, mot de passe chiffré, rôle et historique de connexion : pour ouvrir et sécuriser l'accès nominatif à l'espace client. Base légale : exécution du contrat.",
          ],
          [
            "E-mails de l'espace membre",
            "Adresse e-mail : pour l'invitation, la réinitialisation de mot de passe et l'envoi des comptes rendus mensuels. Base légale : exécution du contrat.",
          ],
          [
            "Journaux techniques",
            "Adresse IP, horodatage, page demandée, type de navigateur : conservés par l'hébergeur pour la sécurité et le diagnostic. Base légale : intérêt légitime à assurer la sécurité du service.",
          ],
          [
            "Prise de contact",
            "Données communiquées spontanément dans un courriel : pour répondre à la demande. Base légale : intérêt légitime à traiter les sollicitations reçues.",
          ]
        ),
        p(
          "Aucune donnée relative à votre patrimoine, à vos comptes-titres ou à vos opérations de bourse n'est collectée par le site. Parlons Long Terme n'a accès à aucun compte d'investissement."
        ),
      ],
    },
    {
      title: "Absence de profilage et de décision automatisée",
      blocks: [
        p(
          "Aucune donnée n'est utilisée pour établir un profil publicitaire, et aucune décision produisant des effets juridiques n'est prise sur le fondement d'un traitement automatisé au sens de l'article 22 du RGPD."
        ),
      ],
    },
    {
      title: "Cookies et traceurs",
      blocks: [
        p(
          "Les pages publiques du site ne déposent aucun cookie publicitaire, aucun traceur de mesure d'audience et aucun cookie de réseau social."
        ),
        p(
          "L'espace membre dépose des cookies strictement nécessaires au maintien de la session authentifiée. Ces cookies sont indispensables au fonctionnement du service demandé et ne requièrent donc pas de consentement préalable au sens de l'article 5(3) de la directive 2002/58/CE. Ils sont supprimés à la déconnexion ou à l'expiration de la session."
        ),
        p(
          "Certaines pages intègrent des liens vers des services tiers (plateformes vidéo, boutiques en ligne, service d'inscription à la newsletter). Ces services appliquent leurs propres politiques de cookies dès lors que vous vous y rendez ; il vous appartient de les consulter."
        ),
      ],
    },
    {
      title: "Destinataires et sous-traitants",
      blocks: [
        p(
          "Les données ne sont ni vendues, ni louées, ni cédées à des tiers à des fins commerciales. Elles sont accessibles au responsable de traitement et, dans la stricte limite de leurs missions, aux prestataires techniques suivants, liés par un contrat de sous-traitance conforme à l'article 28 du RGPD :"
        ),
        rows(...PROCESSORS),
      ],
    },
    {
      title: "Transferts hors Union européenne",
      blocks: [
        p(
          "Certains prestataires sont établis aux États-Unis. Les transferts correspondants sont encadrés par les clauses contractuelles types de la Commission européenne et, le cas échéant, par la certification des prestataires au titre du cadre de protection des données UE : États-Unis (EU–US Data Privacy Framework), assortis de mesures techniques complémentaires telles que le chiffrement en transit et au repos."
        ),
      ],
    },
    {
      title: "Durées de conservation",
      blocks: [
        rows(
          [
            "Newsletter",
            "Jusqu'au retrait du consentement, puis suppression sous 30 jours.",
          ],
          [
            "Compte de l'espace membre",
            "Pendant toute la durée de l'abonnement, puis 12 mois après sa fin, avant suppression ou anonymisation.",
          ],
          [
            "Documents et comptes rendus",
            "Pendant la durée de l'abonnement, puis conservés dans la limite des obligations comptables applicables.",
          ],
          [
            "Pièces comptables et factures",
            "7 ans, conformément aux obligations légales de conservation.",
          ],
          ["Journaux techniques", "12 mois au maximum."],
          [
            "Échanges par courriel",
            "3 ans à compter du dernier contact, sauf obligation légale contraire.",
          ]
        ),
      ],
    },
    {
      title: "Sécurité",
      blocks: [
        p(
          "Les mesures techniques et organisationnelles suivantes sont mises en œuvre pour préserver la confidentialité et l'intégrité des données :"
        ),
        list(
          "chiffrement des échanges par HTTPS sur l'ensemble du site ;",
          "mots de passe stockés sous forme d'empreintes calculées par une fonction de dérivation dédiée, jamais en clair ;",
          "accès à l'espace membre nominatif, avec contrôle des droits selon le rôle ;",
          "documents servis par liens signés à durée limitée, non indexables ;",
          "accès aux consoles d'administration restreint au responsable de traitement."
        ),
      ],
    },
    {
      title: "Vos droits",
      blocks: [
        p(
          "Conformément au règlement (UE) 2016/679 (RGPD), vous disposez des droits suivants :"
        ),
        list(
          "droit d'accès à vos données et d'obtention d'une copie ;",
          "droit de rectification des données inexactes ou incomplètes ;",
          "droit à l'effacement, dans les limites des obligations légales de conservation ;",
          "droit à la limitation du traitement ;",
          "droit d'opposition, notamment à la prospection, à tout moment et sans motif ;",
          "droit à la portabilité des données que vous avez fournies ;",
          "droit de retirer votre consentement à tout moment, sans que cela remette en cause la licéité des traitements antérieurs ;",
          "droit de définir des directives relatives au sort de vos données après votre décès."
        ),
        p(
          `Ces droits s'exercent par courriel à ${COMPANY.email}, ou par courrier au siège social. Une réponse vous est apportée dans un délai d'un mois, prolongeable de deux mois en cas de demande complexe. Une preuve d'identité peut être demandée en cas de doute raisonnable sur l'identité du demandeur.`
        ),
      ],
    },
    {
      title: "Réclamation auprès d'une autorité de contrôle",
      blocks: [
        p(
          "Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès d'une autorité de contrôle :"
        ),
        rows(
          [
            "Estonie, autorité du responsable de traitement",
            "Andmekaitse Inspektsioon (AKI), Tatari 39, 10134 Tallinn - aki.ee",
          ],
          [
            "France, autorité de votre lieu de résidence",
            "Commission nationale de l'informatique et des libertés (CNIL), 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 - cnil.fr",
          ]
        ),
        p(
          "Vous pouvez également saisir l'autorité de contrôle de l'État membre de votre résidence habituelle ou de votre lieu de travail."
        ),
      ],
    },
    {
      title: "Modification de la présente politique",
      blocks: [
        p(
          "Cette politique peut être mise à jour pour tenir compte de l'évolution des services ou du cadre réglementaire. La version applicable est celle publiée sur le site ; la date de dernière mise à jour figure en tête de page. Toute modification substantielle est portée à la connaissance des membres et des abonnés à la newsletter."
        ),
      ],
    },
  ],
};
