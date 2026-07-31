import { gradients, SERIF, site, SITE_GUTTER } from "@/design/site";
import { IMAGES } from "./images";
import { ANCHORS, SITE_LINKS } from "./links";
import { Level, type LevelProps } from "./Level";
import { Kicker, Rule } from "./ui";

/**
 * Les quatre niveaux, de la découverte à l'accompagnement. Le fond alterne
 * crème / sombre pour marquer la progression, et la colonne image bascule d'un
 * côté à l'autre à chaque palier.
 */
const LEVELS: LevelProps[] = [
  {
    id: ANCHORS.level1,
    number: "01",
    kicker: "Niveau 1 · Découvrir l'univers PLT",
    title: "La newsletter gratuite",
    subtitle:
      "Le point d'entrée pour découvrir notre approche, sans engagement.",
    paragraphs: [
      "En vous inscrivant, vous rejoignez une communauté gratuite d'investisseurs, vous recevez chaque mois une analyse d'entreprise détaillée, et vous êtes tenu informé en priorité de nos événements.",
    ],
    cta: {
      href: SITE_LINKS.newsletter,
      label: "Rejoindre la newsletter gratuite",
      variant: "dark",
    },
    image: IMAGES.newsletter,
    tone: "cream",
    mediaSide: "right",
    background: site.cream,
    padding: "clamp(40px,6vw,80px)",
  },
  {
    number: "02",
    kicker: "Niveau 2 · Se former et faire soi-même",
    title: "Le logiciel Value Investing Screener",
    subtitle:
      "Pour ceux qui veulent investir en autonomie, avec les bons outils.",
    paragraphs: [
      "Value Investing Screener vous permet de filtrer les marchés selon des critères de qualité et de valorisation, d'analyser les fondamentaux d'une entreprise et de construire votre propre sélection. La méthode d'analyse, mise à portée de main, pour décider par vous-même.",
    ],
    cta: {
      href: SITE_LINKS.screener,
      label: "Découvrir le logiciel",
      variant: "light",
    },
    image: IMAGES.screener,
    tone: "dark",
    mediaSide: "left",
    background: gradients.level2,
    padding: "clamp(48px,7vw,96px)",
  },
  {
    number: "03",
    kicker: "Niveau 3 · Investir",
    title: "PLT Family Office",
    subtitle: "Pour ceux qui préfèrent être accompagnés dans la durée.",
    paragraphs: [
      // Formulation volontairement prudente : accompagnement et structuration,
      // aucune promesse de performance. À revalider juridiquement si le statut
      // réglementaire de la structure évolue.
      "PLT Family Office est une structure privée d'ingénierie patrimoniale destinée aux entrepreneurs et dirigeants résidents en France et dans l'Union européenne. Un accompagnement structuré autour de votre patrimoine et de votre stratégie, avec l'accès à un réseau de spécialistes en fiscalité, banque et droit.",
    ],
    cta: {
      href: SITE_LINKS.familyOffice,
      label: "En savoir plus sur PLT Family Office",
      variant: "dark",
    },
    image: IMAGES.familyOffice,
    tone: "cream",
    mediaSide: "right",
    background: site.cream,
    padding: "clamp(48px,7vw,96px)",
  },
  {
    number: "04",
    kicker: "Niveau 4 · Rejoindre notre club d'affaires",
    title: "Le Mastermind PLT Insider",
    subtitle: "Le cercle le plus engagé, pour investisseurs et entrepreneurs.",
    paragraphs: [
      "PLT Insider est un club d'affaires où l'on échange sans filtre sur les stratégies, l'allocation de capital et les défis d'un patrimoine qui grandit. Vous y trouverez des rendez-vous mensuels, une rencontre annuelle, un réseau de spécialistes de haut niveau et une visibilité sur la façon dont je gère mes propres actifs et ceux de mes sociétés.",
      "Plus qu'un mastermind, un environnement pour avancer entouré des bonnes personnes.",
    ],
    cta: {
      href: SITE_LINKS.insider,
      label: "Rejoindre PLT Insider",
      variant: "solid",
    },
    // Porte d'entrée des membres déjà inscrits, vers /insider.
    secondaryCta: {
      href: SITE_LINKS.memberArea,
      label: "Espace membre",
      variant: "light",
    },
    image: IMAGES.insider,
    tone: "dark",
    mediaSide: "left",
    background: gradients.level4,
    padding: "clamp(56px,8vw,110px)",
    feature: true,
  },
];

const JourneyIntro = () => (
  <section
    style={{
      background: site.cream,
      color: site.onLight,
      padding: `clamp(48px,7vw,96px) ${SITE_GUTTER} clamp(24px,4vw,48px)`,
    }}
  >
    <div
      className="plt-s-reveal"
      style={{ maxWidth: 1080, margin: "0 auto", textAlign: "center" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          marginBottom: 22,
        }}
      >
        <Rule />
        <Kicker>Nos solutions</Kicker>
        <Rule />
      </div>

      <h2
        style={{
          fontFamily: SERIF,
          fontWeight: 500,
          fontSize: "clamp(34px,4.6vw,62px)",
          lineHeight: 1.04,
          margin: "0 0 18px",
          letterSpacing: ".01em",
        }}
      >
        Un parcours en quatre niveaux
      </h2>

      <p
        style={{
          maxWidth: 620,
          margin: "0 auto",
          color: site.onLightMuted,
          fontSize: 17,
          lineHeight: 1.7,
        }}
      >
        De la découverte à l&apos;accompagnement, chaque niveau correspond à une
        étape de votre progression d&apos;investisseur.
      </p>
    </div>
  </section>
);

export const Journey = () => (
  <>
    <JourneyIntro />
    {LEVELS.map((level) => (
      <Level key={level.number} {...level} />
    ))}
  </>
);
