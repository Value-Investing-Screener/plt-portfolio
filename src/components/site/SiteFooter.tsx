import { site, SITE_GUTTER } from "@/design/site";
import { SITE_LINKS } from "./links";
import { Wordmark } from "./ui";

const LEGAL = [
  { href: SITE_LINKS.terms, label: "Conditions d'utilisation" },
  { href: SITE_LINKS.privacy, label: "Politique de confidentialité" },
  { href: SITE_LINKS.legal, label: "Mentions légales" },
];

export const SiteFooter = () => {
  // Composant serveur : l'année est calculée au prérendu, que `revalidate`
  // rejoue chaque jour (voir `src/app/page.tsx`). Le copyright ne peut donc
  // pas rester bloqué sur l'année du dernier déploiement.
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#000",
        color: "#8a817a",
        padding: `clamp(48px,6vw,72px) ${SITE_GUTTER} clamp(24px,3vw,36px)`,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 32,
            borderBottom: "1px solid rgba(255,255,255,.12)",
            paddingBottom: "clamp(32px,4vw,48px)",
          }}
        >
          <Wordmark size={18} padding="12px 16px" />

          {/*
            Mention à conserver : les contenus du site sont pédagogiques et ne
            constituent pas un conseil en investissement.
          */}
          <p
            style={{
              margin: 0,
              maxWidth: 420,
              fontSize: 14,
              lineHeight: 1.7,
              color: "#a79e94",
            }}
          >
            Les contenus proposés sont à visée pédagogique et ne constituent
            pas un conseil en investissement. Investir comporte des risques de
            perte en capital.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
            paddingTop: 24,
            fontSize: 13,
          }}
        >
          <nav style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
            {LEGAL.map(({ href, label }) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </nav>

          <div style={{ color: "#6f665c" }}>
            © Parlons Long Terme {year} · Coding Capital
          </div>

          <a
            href={SITE_LINKS.youtube}
            aria-label="Chaîne YouTube Parlons Long Terme"
            style={{
              width: 30,
              height: 22,
              background: site.accent,
              borderRadius: 5,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#000",
              fontSize: 11,
            }}
          >
            <span aria-hidden>▶</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
