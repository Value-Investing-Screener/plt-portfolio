import { colors, GUTTER } from "@/design/tokens";

export const TABS = [
  { key: "allocation", label: "Allocation & portefeuilles" },
  { key: "performances", label: "Performances" },
  { key: "review", label: "Review mensuel" },
  { key: "annual", label: "Revue annuelle" },
  /** Réservé au rôle `admin`. */
  { key: "admin", label: "⚙ Backoffice", right: true, adminOnly: true },
] as const;

export type TabKey = (typeof TABS)[number]["key"];

/** Onglets visibles selon le rôle du membre connecté. */
export const visibleTabs = (isAdmin: boolean) =>
  TABS.filter((tab) => !("adminOnly" in tab && tab.adminOnly) || isAdmin);

type TabsNavProps = {
  value: TabKey;
  onChange: (tab: TabKey) => void;
  isAdmin: boolean;
};

export const TabsNav = ({ value, onChange, isAdmin }: TabsNavProps) => (
  <nav
    style={{
      display: "flex",
      gap: 2,
      padding: `0 ${GUTTER}`,
      background: colors.bar,
      borderBottom: `1px solid ${colors.borderStrong}`,
      overflowX: "auto",
    }}
  >
    {visibleTabs(isAdmin).map((tab) => {
      const active = tab.key === value;
      return (
        <button
          key={tab.key}
          type="button"
          className={active ? undefined : "plt-tab"}
          onClick={() => onChange(tab.key)}
          aria-current={active ? "page" : undefined}
          style={{
            appearance: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
            fontWeight: 600,
            fontSize: 12.5,
            letterSpacing: ".03em",
            padding: "15px 22px",
            whiteSpace: "nowrap",
            borderBottom: `2px solid ${active ? colors.accent : "transparent"}`,
            color: active ? colors.textHi : colors.muted2,
            marginLeft: "right" in tab && tab.right ? "auto" : undefined,
            transition: "color .15s ease",
          }}
        >
          {tab.label}
        </button>
      );
    })}
  </nav>
);
