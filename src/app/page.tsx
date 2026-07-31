import "@/components/site/site.css";

import { site, SITE_SANS } from "@/design/site";
import { Bio } from "@/components/site/Bio";
import { Book } from "@/components/site/Book";
import { Hero } from "@/components/site/Hero";
import { Journey } from "@/components/site/Journey";
import { Reveal, RevealNoScript } from "@/components/site/Reveal";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Testimonials } from "@/components/site/Testimonials";

/**
 * La page est prérendue, mais rejouée une fois par jour : sans cela l'année
 * du copyright resterait figée à celle du dernier déploiement.
 */
export const revalidate = 86400;

/**
 * Deux sections restent optionnelles, comme dans la maquette : le livre et les
 * témoignages. Les basculer ici suffit à les retirer de la page.
 */
const SHOW_BOOK = true;
const SHOW_TESTIMONIALS = true;

/** Site vitrine « Parlons Long Terme » — racine du domaine. */
export default function SitePage() {
  return (
    <div
      // `plt-anim` arme la révélation au défilement dès le rendu serveur.
      className="plt-site plt-anim"
      style={{
        background: site.ink,
        color: site.onDark,
        fontFamily: SITE_SANS,
        overflowX: "hidden",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <RevealNoScript />
      <Reveal />

      <Hero />
      <Bio />
      {SHOW_BOOK && <Book />}
      <Journey />
      {SHOW_TESTIMONIALS && <Testimonials />}
      <SiteFooter />
    </div>
  );
}
