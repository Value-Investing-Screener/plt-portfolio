"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { colors, GUTTER } from "@/design/tokens";
import { routes } from "@/lib/routes";

/** Un onglet = une vraie route. `href` exact, `adminOnly` réservé au rôle admin. */
export const TABS = [
  { key: "allocation", label: "Allocation & portefeuilles", href: routes.insider },
  { key: "performances", label: "Performances", href: routes.performances },
  { key: "review", label: "Review mensuel", href: routes.review },
  { key: "annual", label: "Revue annuelle", href: routes.annual },
  {
    key: "admin",
    label: "⚙ Backoffice",
    href: routes.backoffice,
    right: true,
    adminOnly: true,
  },
] as const;

export type TabKey = (typeof TABS)[number]["key"];

/** Onglets visibles selon le rôle du membre connecté. */
export const visibleTabs = (isAdmin: boolean) =>
  TABS.filter((tab) => !("adminOnly" in tab && tab.adminOnly) || isAdmin);

export const TabsNav = ({ isAdmin }: { isAdmin: boolean }) => {
  const pathname = usePathname();

  return (
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
        // L'onglet Allocation est la racine de l'espace : il ne doit pas rester
        // actif sur `/insider/performances`, d'où l'égalité stricte.
        const active =
          tab.href === routes.insider
            ? pathname === routes.insider
            : pathname.startsWith(tab.href);
        return (
          <Link
            key={tab.key}
            href={tab.href}
            prefetch
            className={active ? undefined : "plt-tab"}
            aria-current={active ? "page" : undefined}
            style={{
              fontFamily: "inherit",
              fontWeight: 600,
              fontSize: 12.5,
              letterSpacing: ".03em",
              padding: "15px 22px",
              whiteSpace: "nowrap",
              textDecoration: "none",
              borderBottom: `2px solid ${
                active ? colors.accent : "transparent"
              }`,
              color: active ? colors.textHi : colors.muted2,
              marginLeft: "right" in tab && tab.right ? "auto" : undefined,
              transition: "color .15s ease",
            }}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
};
