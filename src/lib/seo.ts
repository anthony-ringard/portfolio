const SITE_ORIGIN = "https://anthonyringard.dev";

/**
 * Met à jour le titre, la meta description et le lien canonical de la page
 * active. Nécessaire car c'est une SPA 100% client (pas de pré-rendu) : sans
 * ça, toutes les routes partageraient le même <title>/description/canonical
 * de index.html, ce qui indique à Google que /audit, /contact etc. sont des
 * doublons de la page d'accueil — et les empêche d'être indexées à part.
 */
export function setSeo(title: string, description: string, path: string): void {
  document.title = title;

  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute("content", description);

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", `${SITE_ORIGIN}${path}`);
}
