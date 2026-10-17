/**
 * Choisit le Payment Link Stripe selon l'environnement : lien live en prod
 * (vrai paiement), lien de test partout ailleurs (dev local, preview) — pour
 * ne jamais débiter quelqu'un pour de vrai pendant qu'on développe.
 */
export function stripeLink(isProd: boolean, liveLink: string, testLink: string): string {
  return isProd ? liveLink : testLink;
}
