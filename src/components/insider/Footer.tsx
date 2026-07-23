import { colors } from "@/design/tokens";

export const Footer = ({ onOpenCgv }: { onOpenCgv: () => void }) => (
  <footer
    style={{
      textAlign: "center",
      fontSize: 11,
      color: colors.faint,
      lineHeight: 1.7,
      marginTop: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <button
        type="button"
        onClick={onOpenCgv}
        className="plt-link-footer"
        style={{
          appearance: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
          fontSize: 11,
          color: colors.muted,
          letterSpacing: ".02em",
          padding: 0,
          textDecoration: "underline",
          textUnderlineOffset: 3,
        }}
      >
        Conditions générales de vente
      </button>
      <span style={{ color: "#3A4247" }}>·</span>
      <span>
        Données à titre indicatif, ne constituent pas un conseil en
        investissement personnalisé.
      </span>
    </div>
    <div>© 2026 Parlons Long Terme — Espace membres PLT Insider</div>
  </footer>
);
