import { COMPANY } from "./company";
import { list, p, type LegalDocument } from "./types";

/**
 * Conditions d'utilisation du site vitrine.
 *
 * Distinctes des CGV de l'offre PLT Insider (`src/lib/cgv.ts`), qui régissent
 * la souscription payante : ce document ne couvre que l'usage du site public
 * et l'accès à l'espace membre.
 */
export const TERMS: LegalDocument = {
  title: "Conditions d'utilisation",
  lead: "Règles applicables à la consultation du site, à l'inscription à la newsletter et à l'accès à l'espace membre.",
  updatedAt: "31 juillet 2026",
  sections: [
    {
      title: "Article 1 : Objet et acceptation",
      blocks: [
        p(
          `Les présentes conditions d'utilisation (les « Conditions ») régissent l'accès au site ${COMPANY.site} et son utilisation. Elles sont conclues entre ${COMPANY.name} (« Parlons Long Terme ») et toute personne consultant le site (l'« Utilisateur »).`
        ),
        p(
          "La consultation du site vaut acceptation pleine et entière des Conditions. L'Utilisateur qui ne les accepte pas doit renoncer à utiliser le site."
        ),
        p(
          "Les Conditions ne couvrent pas la souscription à l'offre payante PLT Insider, régie par des conditions générales de vente distinctes, communiquées et acceptées au moment de la souscription."
        ),
      ],
    },
    {
      title: "Article 2 : Accès au site",
      blocks: [
        p(
          "Le site est accessible gratuitement, à l'exception des coûts de connexion qui restent à la charge de l'Utilisateur. Certaines rubriques sont réservées aux membres et supposent une authentification."
        ),
        p(
          "Parlons Long Terme s'efforce d'assurer la disponibilité du site mais ne souscrit à aucune obligation de résultat. L'accès peut être interrompu, notamment pour maintenance, mise à jour, ou en cas de force majeure, sans préavis ni indemnité."
        ),
      ],
    },
    {
      title: "Article 3 : Nature des contenus",
      blocks: [
        p(
          "Les contenus du site sont publiés à visée pédagogique. Ils ne constituent ni un conseil en investissement, ni une recommandation personnalisée, ni une offre ou une sollicitation d'acheter ou de vendre un instrument financier."
        ),
        p(
          "Parlons Long Terme ne fournit aucun service d'investissement au sens de la directive MiFID II. Les analyses publiées reflètent une opinion à un instant donné et peuvent évoluer sans que le site soit mis à jour."
        ),
        p(
          "Investir comporte des risques de perte en capital, y compris supérieure au montant investi pour certains instruments. L'Utilisateur agit sous sa seule responsabilité et il lui appartient de recueillir, avant toute décision, l'avis de professionnels au regard de sa situation, de la réglementation et de la fiscalité applicables dans son pays de résidence."
        ),
      ],
    },
    {
      title: "Article 4 : Newsletter",
      blocks: [
        p(
          "L'inscription à la newsletter est gratuite, facultative et suppose la communication d'une adresse e-mail valide. Elle emporte consentement à recevoir les publications de Parlons Long Terme ainsi que les informations relatives à ses événements et à ses offres."
        ),
        p(
          "Le consentement est révocable à tout moment, par le lien de désinscription présent dans chaque envoi ou par courriel à l'adresse de contact. Le retrait du consentement ne remet pas en cause la licéité des envois antérieurs."
        ),
      ],
    },
    {
      title: "Article 5 : Espace membre",
      blocks: [
        p(
          "L'espace membre est réservé aux personnes ayant souscrit à l'offre PLT Insider. L'accès est nominatif : les identifiants sont strictement personnels et ne peuvent être cédés, partagés ni revendus."
        ),
        list(
          "L'Utilisateur est responsable de la confidentialité de ses identifiants et de toute activité menée depuis son compte.",
          "Toute utilisation frauduleuse ou suspicion de compromission doit être signalée sans délai à l'adresse de contact.",
          "Parlons Long Terme peut suspendre un accès en cas de manquement aux présentes Conditions ou aux conditions générales de vente."
        ),
        p(
          "Les contenus de l'espace membre sont confidentiels et destinés au seul usage personnel du membre. Leur diffusion, reproduction ou communication à des tiers est interdite."
        ),
      ],
    },
    {
      title: "Article 6 : Engagements de l'Utilisateur",
      blocks: [
        p("L'Utilisateur s'engage à ne pas :"),
        list(
          "porter atteinte au fonctionnement du site, à sa sécurité ou à son intégrité, notamment par extraction automatisée massive, intrusion ou saturation ;",
          "reproduire, extraire ou réutiliser tout ou partie des contenus et bases de données à des fins autres que strictement privées ;",
          "utiliser le site à des fins illicites, ou pour diffuser des contenus contraires à l'ordre public, diffamatoires ou portant atteinte aux droits de tiers ;",
          "usurper l'identité d'un tiers ou entretenir une confusion avec Parlons Long Terme."
        ),
      ],
    },
    {
      title: "Article 7 : Propriété intellectuelle",
      blocks: [
        p(
          "Les contenus du site sont protégés par le droit de la propriété intellectuelle et restent la propriété exclusive de Parlons Long Terme ou de ses partenaires. Aucune disposition des Conditions n'emporte cession de droits au profit de l'Utilisateur."
        ),
        p(
          "L'Utilisateur bénéficie d'un droit d'usage personnel, non exclusif et non transférable, limité à la consultation des contenus. Toute autre exploitation suppose une autorisation écrite préalable."
        ),
      ],
    },
    {
      title: "Article 8 : Responsabilité",
      blocks: [
        p(
          "Parlons Long Terme apporte le plus grand soin à l'exactitude des informations publiées mais ne peut en garantir l'exhaustivité ni l'actualité, en particulier s'agissant de données de marché issues de sources tierces."
        ),
        p(
          "Parlons Long Terme ne saurait être tenue responsable des décisions prises par l'Utilisateur sur la base des contenus, des dommages indirects résultant de l'utilisation du site, ni des dysfonctionnements liés au matériel, au réseau ou aux logiciels de l'Utilisateur."
        ),
      ],
    },
    {
      title: "Article 9 : Données personnelles et cookies",
      blocks: [
        p(
          "Le traitement des données personnelles est décrit dans la politique de confidentialité, qui fait partie intégrante des présentes Conditions."
        ),
      ],
    },
    {
      title: "Article 10 : Modification des Conditions",
      blocks: [
        p(
          "Parlons Long Terme peut modifier les Conditions à tout moment afin de les adapter à ses services ou au cadre réglementaire. La version applicable est celle publiée sur le site au moment de la consultation ; la date de dernière mise à jour figure en tête de page."
        ),
      ],
    },
    {
      title: "Article 11 : Droit applicable et litiges",
      blocks: [
        p(
          "Les Conditions sont rédigées en langue française et soumises au droit français, sans préjudice des dispositions impératives protectrices du pays de résidence de l'Utilisateur consommateur."
        ),
        p(
          `En cas de différend, l'Utilisateur adresse d'abord une réclamation écrite à ${COMPANY.email}. À défaut d'accord dans un délai de deux mois, il peut recourir gratuitement à une médiation conventionnelle de la consommation ou à la plateforme européenne de règlement en ligne des litiges. À défaut de règlement amiable, le litige est porté devant la juridiction compétente dans les conditions du droit commun.`
        ),
      ],
    },
  ],
};
