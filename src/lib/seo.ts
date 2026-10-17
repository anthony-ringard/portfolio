const SITE_ORIGIN = "https://anthonyringard.dev";

function upsertMeta(attr: "name" | "property", key: string, content: string): void {
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

/**
 * Met à jour le titre, la meta description, le canonical, et les balises
 * Open Graph / Twitter de la page active. Nécessaire car c'est une SPA 100%
 * client (pas de pré-rendu) : sans ça, toutes les routes partageraient le
 * même <title>/description/canonical/og: de index.html — Google indexerait
 * /audit comme un doublon de la homepage, et partager /audit sur LinkedIn
 * afficherait le titre générique de la homepage au lieu du bon aperçu.
 */
export function setSeo(title: string, description: string, path: string): void {
  document.title = title;
  const url = `${SITE_ORIGIN}${path}`;

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
  canonical.setAttribute("href", url);

  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:url", url);
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", description);
}
