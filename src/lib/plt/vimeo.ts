import "server-only";

/**
 * Durée d'une vidéo Vimeo (en minutes) via l'endpoint oEmbed public.
 *
 * Fonctionne pour les vidéos publiques et non listées (URL avec hash privé) ;
 * renvoie null si la vidéo est totalement privée, l'embed désactivé, ou l'URL
 * n'est pas une vidéo Vimeo. On ne bloque jamais la publication là-dessus.
 */
export const fetchVimeoDurationMin = async (
  videoUrl: string
): Promise<number | null> => {
  if (!/vimeo\.com/.test(videoUrl)) return null;

  try {
    const res = await fetch(
      `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(videoUrl)}`,
      { signal: AbortSignal.timeout(6000) }
    );
    if (!res.ok) return null;
    const { duration } = (await res.json()) as { duration?: number };
    return duration ? Math.round(duration / 60) : null;
  } catch {
    return null;
  }
};
