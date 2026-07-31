"use client";

import { useEffect } from "react";

/**
 * Révèle les blocs marqués `.plt-s-reveal` lorsqu'ils entrent dans le champ.
 *
 * L'état masqué est posé côté serveur par la classe `plt-anim` sur le
 * conteneur de la page — il n'y a donc aucun scintillement au chargement. Ce
 * composant ne fait qu'ajouter `is-visible` au fil du défilement, et retire
 * `plt-anim` si l'animation ne doit pas jouer.
 *
 * Un IntersectionObserver plutôt qu'une timeline de défilement CSS
 * (`animation-timeline: view()`) : cette dernière n'est pas encore comprise
 * par tous les navigateurs, qui n'auraient alors eu aucun mouvement.
 */
export const Reveal = () => {
  useEffect(() => {
    const scope = document.querySelector<HTMLElement>(".plt-anim");
    if (!scope) return;

    /** Désarme la révélation : tout s'affiche, sans transition. */
    const disarm = () => scope.classList.remove("plt-anim");

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      disarm();
      return;
    }

    const targets = scope.querySelectorAll<HTMLElement>(".plt-s-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      // Le bloc se dévoile une fois franchi le dixième bas de l'écran : la
      // transition se joue pendant que le lecteur arrive dessus.
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return null;
};

/**
 * Sans JavaScript, aucun `is-visible` ne sera jamais ajouté : ce style rend la
 * main au contenu. `!important` parce qu'il doit l'emporter sur l'état masqué,
 * plus spécifique.
 */
export const RevealNoScript = () => (
  <noscript>
    <style
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html:
          ".plt-site .plt-s-reveal{opacity:1!important;transform:none!important}",
      }}
    />
  </noscript>
);
