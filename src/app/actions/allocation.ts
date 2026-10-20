"use server";

import { requireMember } from "@/lib/auth";
import type { AllocationSettings } from "@/lib/plt/types";
import { PORTFOLIO_KEYS, REFERENCE_CURRENCIES } from "@/lib/portfolios";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { ActionResult } from "./publications";

const MAX_CAPITAL = 1e12;

const isPercent = (value: unknown): value is number =>
  typeof value === "number" &&
  Number.isInteger(value) &&
  value >= 0 &&
  value <= 100;

/**
 * Enregistre les réglages d'allocation du membre connecté. Écrit avec la
 * session du membre : la RLS garantit qu'il ne touche que ses propres lignes.
 */
export const saveAllocation = async (
  settings: AllocationSettings
): Promise<ActionResult> => {
  try {
    await requireMember();
    // Sans Supabase (développement), il n'y a nulle part où enregistrer.
    if (!isSupabaseConfigured()) {
      return { ok: true, message: "Réglages non enregistrés (hors ligne)." };
    }

    const { capital, currency, exposures } = settings;

    if (!Number.isFinite(capital) || capital < 0 || capital > MAX_CAPITAL) {
      return { ok: false, error: "Capital invalide." };
    }
    if (!(REFERENCE_CURRENCIES as readonly string[]).includes(currency)) {
      return { ok: false, error: "Devise inconnue." };
    }
    if (!PORTFOLIO_KEYS.every((key) => isPercent(exposures?.[key]))) {
      return { ok: false, error: "Exposition invalide." };
    }

    // Capital et expositions en une transaction (`plt_save_allocation`).
    const { error } = await createSupabaseServerClient().rpc(
      "plt_save_allocation",
      {
        p_capital: capital,
        p_currency: currency,
        p_exposures: Object.fromEntries(
          PORTFOLIO_KEYS.map((key) => [key, exposures[key]])
        ),
      }
    );

    if (error) return { ok: false, error: error.message };
    return { ok: true, message: "Réglages enregistrés." };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Action impossible.",
    };
  }
};
