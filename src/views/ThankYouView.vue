<script setup lang="ts">
import { computed } from "vue";
import { profile } from "../lib/content";
import { buildMailHref, revealEmail } from "../lib/email";
import RevealBlock from "../components/RevealBlock.vue";
import { useSeo } from "../composables/useSeo";

useSeo(
  "Merci — Anthony Ringard",
  "Confirmation de commande audit de code.",
  "/audit/merci",
);

const email = computed(() => revealEmail(profile.contact.emailObfuscated));
const mailHref = computed(() =>
  buildMailHref(
    email.value,
    "Accès au repo — Audit de code",
    "Bonjour Anthony,\n\nSuite à mon paiement, voici comment accéder au code à auditer :\n\n[précisez ici : lien GitHub + invitation collaborateur en lecture seule / zip / autre]\n\nMerci,",
  ),
);
</script>

<template>
  <section class="mx-auto max-w-2xl px-6 py-24 text-center md:py-32">
    <RevealBlock>
      <span
        class="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-dim/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent"
      >
        Paiement confirmé
      </span>
    </RevealBlock>

    <RevealBlock :delay="90">
      <h1 class="font-display mt-6 text-3xl leading-tight text-ink md:text-4xl">
        Merci, c'est noté !
      </h1>
      <p class="text-ink-light mx-auto mt-4 max-w-lg text-sm leading-7 md:text-base">
        Votre paiement est confirmé — vous allez recevoir un reçu de Stripe par email dans
        quelques instants.
      </p>
    </RevealBlock>

    <RevealBlock :delay="160">
      <div class="contact-channel-card mt-10 border border-line bg-panel px-6 py-6 text-left md:px-8">
        <p class="text-sm font-semibold text-ink">Prochaine étape : l'accès au code</p>
        <p class="mt-2 text-sm leading-6 text-ink/70">
          Pour démarrer, j'ai besoin d'un accès en lecture seule au repo à auditer — le plus
          simple est de m'ajouter comme collaborateur GitHub temporaire, mais une archive .zip ou
          un accès ponctuel fonctionne aussi.
        </p>
        <a :href="mailHref" class="primary-button mt-5 inline-flex">
          Envoyer l'accès par email
        </a>
      </div>
    </RevealBlock>

    <RevealBlock :delay="220">
      <p class="mt-8 text-xs text-ink/45">
        Rapport livré sous 5 jours ouvrés à compter de la réception de l'accès. Une question
        avant ? Répondez simplement au reçu Stripe ou écrivez-moi directement.
      </p>
      <RouterLink to="/" class="mt-6 inline-block text-sm font-medium text-accent hover:underline">
        ← Retour à l'accueil
      </RouterLink>
    </RevealBlock>
  </section>
</template>
