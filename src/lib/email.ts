/**
 * Obfuscation simple pour empêcher le scraping statique d'une adresse email
 * (bots qui lisent le HTML/JS bundlé sans l'exécuter, ou qui parsent le repo
 * GitHub public directement). Ce n'est PAS une protection contre un bot qui
 * exécute du JS — l'objectif est d'élever le coût du scraping basique, pas
 * d'atteindre une sécurité absolue (impossible sans backend).
 */
export function obfuscateEmail(email: string): string {
  return btoa(email.split("").reverse().join(""));
}

export function revealEmail(obfuscated: string): string {
  return atob(obfuscated).split("").reverse().join("");
}

export function buildMailHref(email: string, subject: string, body: string): string {
  const params = `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return `mailto:${email}?${params}`;
}
