import { SignOutButton } from "@/components/auth/SignOutButton";
import { colors, GUTTER } from "@/design/tokens";
import type { Member } from "@/lib/auth";
import { Emblem, Label } from "./ui";

export const Topbar = ({ member }: { member?: Member | null }) => (
  <header
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      flexWrap: "wrap",
      padding: `22px ${GUTTER}`,
      borderBottom: `1px solid ${colors.borderStrong}`,
      background: colors.bar,
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
      <div
        style={{
          border: "1px solid rgba(230,234,236,0.45)",
          padding: "7px 10px",
          lineHeight: 1.05,
          fontSize: 10,
          letterSpacing: ".18em",
          color: colors.text,
          fontWeight: 600,
          textAlign: "left",
        }}
      >
        PARLONS
        <br />
        LONG
        <br />
        TERME
      </div>
      <div
        style={{
          borderLeft: `1px solid ${colors.borderInput}`,
          paddingLeft: 18,
        }}
      >
        <div
          style={{
            fontSize: 10,
            letterSpacing: ".26em",
            textTransform: "uppercase",
            color: colors.accent,
            marginBottom: 5,
            fontWeight: 600,
          }}
        >
          Espace client · Confidentiel
        </div>
        <h1
          style={{
            margin: 0,
            fontWeight: 600,
            fontSize: "clamp(20px,2.3vw,28px)",
            letterSpacing: "-.01em",
            lineHeight: 1,
          }}
        >
          PLT Insider - Capital Allocation Mastermind
        </h1>
      </div>
    </div>

    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      {member ? (
        <>
          <div style={{ textAlign: "right", lineHeight: 1.35 }}>
            <div
              style={{ fontSize: 13, fontWeight: 600, color: colors.textHi }}
            >
              {member.fullName || member.email}
            </div>
            <Label size={9.5} spacing=".16em">
              {member.role === "admin" ? "Administrateur" : "Membre PLT Insider"}
            </Label>
          </div>
          <SignOutButton />
        </>
      ) : null}
      <Emblem />
    </div>
  </header>
);
