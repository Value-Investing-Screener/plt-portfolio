import type { CSSProperties } from "react";

import { gradients, SERIF, site } from "@/design/site";
import { Figure } from "./Figure";
import { IMAGES } from "./images";
import { ANCHORS } from "./links";
import { Fleur, Wordmark } from "./ui";

/** Point orange flottant du médaillon. */
const Dot = ({
  className,
  size,
  glow,
  style,
}: {
  className: string;
  size: number;
  glow: string;
  style: CSSProperties;
}) => (
  <span
    aria-hidden
    className={className}
    style={{
      position: "absolute",
      width: size,
      height: size,
      borderRadius: "50%",
      background: site.accent,
      boxShadow: glow,
      ...style,
    }}
  />
);

export const Hero = () => (
  <section
    style={{
      position: "relative",
      minHeight: "100vh",
      background: gradients.hero,
      padding: `clamp(28px,4vw,52px) clamp(24px,5vw,72px) clamp(80px,10vw,120px)`,
      boxSizing: "border-box",
      overflow: "hidden",
    }}
  >
    <header
      style={{
        position: "relative",
        zIndex: 5,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 24,
      }}
    >
      <Wordmark frosted />
      <Fleur size={34} />
    </header>

    <div
      className="plt-s-collapse"
      style={{
        position: "relative",
        zIndex: 5,
        display: "grid",
        gridTemplateColumns: "1.05fr .95fr",
        gap: "clamp(24px,4vw,56px)",
        alignItems: "center",
        maxWidth: 1320,
        margin: "clamp(36px,6vw,72px) auto 0",
      }}
    >
      <div className="plt-s-body">
        <h1
          className="plt-s-enter"
          style={{
            fontFamily: SERIF,
            fontWeight: 500,
            color: site.white,
            fontSize: "clamp(44px,6.6vw,96px)",
            lineHeight: 0.98,
            letterSpacing: ".015em",
            margin: 0,
            textWrap: "balance",
          }}
        >
          SUBLIMEZ
          <br />
          VOTRE CAPITAL
        </h1>

        <div
          className="plt-s-hero-sub plt-s-enter plt-s-enter-2"
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 22,
            marginTop: "clamp(20px,3vw,40px)",
            paddingLeft: "clamp(40px,12%,150px)",
          }}
        >
          <span
            aria-hidden
            style={{
              display: "inline-block",
              width: "clamp(48px,6vw,96px)",
              height: 1,
              background: site.accent,
              marginTop: 26,
              flex: "none",
            }}
          />
          <span
            style={{
              fontFamily: SERIF,
              fontWeight: 400,
              color: site.onDark,
              fontSize: "clamp(34px,4.8vw,70px)",
              lineHeight: 1,
              letterSpacing: ".02em",
            }}
          >
            AVEC
            <br />
            PERSPICACITÉ
          </span>
        </div>
      </div>

      {/* Médaillon rond et ses deux anneaux cuivre. */}
      <div
        className="plt-s-media plt-s-enter-bloom"
        style={{
          position: "relative",
          justifySelf: "center",
          width: "min(92%,460px)",
          aspectRatio: "1",
        }}
      >
        <span
          aria-hidden
          style={{
            position: "absolute",
            inset: "-9%",
            border: "1px solid rgba(232,134,60,.45)",
            borderRadius: "50%",
          }}
        />
        <span
          aria-hidden
          className="plt-s-ring"
          style={{
            position: "absolute",
            inset: "-9%",
            borderRadius: "50%",
            border: "1px solid transparent",
            borderTopColor: "rgba(232,134,60,.9)",
          }}
        />
        <Figure
          image={IMAGES.heroPortrait}
          tone="medallion"
          round
          priority
          captionSize={12}
          style={{ position: "absolute", inset: 0 }}
        />
        <Dot
          className="plt-s-dot-a"
          size={12}
          glow="0 0 24px 6px rgba(232,134,60,.6)"
          style={{ top: "6%", right: "-4%" }}
        />
        <Dot
          className="plt-s-dot-b"
          size={8}
          glow="0 0 18px 5px rgba(232,134,60,.5)"
          style={{ bottom: "2%", left: "-6%" }}
        />
      </div>
    </div>

    <div
      className="plt-s-enter plt-s-enter-3"
      style={{
        position: "relative",
        zIndex: 5,
        display: "flex",
        justifyContent: "center",
        margin: "clamp(56px,7vw,90px) auto 0",
      }}
    >
      <a
        href={`#${ANCHORS.bio}`}
        aria-label="Faire défiler vers la présentation"
        style={{
          width: 118,
          height: 118,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,.5)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          color: site.white,
        }}
      >
        <span style={{ fontSize: 13, letterSpacing: ".22em" }}>MORE</span>
        <span aria-hidden style={{ fontSize: 16 }}>
          ↓
        </span>
      </a>
    </div>
  </section>
);
