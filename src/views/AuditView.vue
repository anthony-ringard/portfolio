<script setup lang="ts">
import AuditOffer from "../components/AuditOffer.vue";
import CalendlyCta from "../components/CalendlyCta.vue";
import RevealBlock from "../components/RevealBlock.vue";
import { CALENDLY_LINK } from "../lib/constants";
import { stripeLink } from "../lib/stripe";
import { useSeo } from "../composables/useSeo";

useSeo(
  "Audit de code PHP/Symfony dès 149€ — Anthony Ringard",
  "Audit de code senior sur votre backend Symfony : dette technique, risques prioritaires, rapport structuré sous 5 jours ouvrés. Audit Express à partir de 149€ (tarif de lancement).",
  "/audit",
);

// Test en local (npm run dev / preview), liens LIVE uniquement sur le build de prod réel.
// Ne JAMAIS mettre de clé secrète ici — voir .claude/agents/security-secrets/SKILL.md
const TEST_LINK = "https://buy.stripe.com/test_bJeaEY8PN3OteLb8aZ8g000";
const STRIPE_LINK_EXPRESS = stripeLink(
  import.meta.env.PROD,
  "https://buy.stripe.com/aFa7sL5Xa9I2cKu0kg63K00",
  TEST_LINK,
);
const STRIPE_LINK_STANDARD = stripeLink(
  import.meta.env.PROD,
  "https://buy.stripe.com/4gM28rbhu07seSCgje63K01",
  TEST_LINK,
);

const offers = [
  {
    title: "Audit Express",
    regularPrice: 249,
    launchPrice: 149,
    description:
      "Analyse ciblée d'un service PHP/Symfony : dette technique et 3 à 5 risques prioritaires.",
    features: [
      "Scope : 1 service, jusqu'à 40 fichiers",
      "Accès lecture seule, code supprimé après livraison",
      "Rapport structuré sous 5 jours ouvrés",
      "Pas de call inclus",
    ],
    stripeLink: STRIPE_LINK_EXPRESS,
  },
  {
    title: "Audit Standard",
    regularPrice: 399,
    launchPrice: 249,
    description: "Scope élargi (plusieurs services) avec restitution en direct.",
    features: [
      "Scope élargi, plusieurs services",
      "Accès lecture seule, code supprimé après livraison",
      "Rapport structuré + 20 min de call de restitution",
    ],
    stripeLink: STRIPE_LINK_STANDARD,
  },
];
</script>

<template>
  <section class="mx-auto max-w-5xl px-6 py-20">
    <header class="mb-14 text-center">
      <RevealBlock>
        <p class="section-label justify-center">Audit de code — résultat sous 5 jours ouvrés</p>
      </RevealBlock>

      <RevealBlock :delay="90">
        <h1 class="font-display mx-auto mt-6 max-w-3xl text-3xl leading-tight text-ink md:text-5xl">
          Un regard senior sur votre backend Symfony, avant que ça coûte cher.
        </h1>
      </RevealBlock>

      <RevealBlock :delay="160">
        <p class="text-ink-light mx-auto mt-5 max-w-xl text-sm leading-7 md:text-base">
          12 ans à faire tourner du PHP/Symfony en production e-commerce. Je lis votre code, j'isole
          ce qui va vraiment poser problème, et je vous le dis clairement — une vraie lecture
          technique, pas un rapport générique.
        </p>
      </RevealBlock>

      <RevealBlock :delay="130">
        <p class="mt-5 text-xs tracking-wide text-ink/45">
          12 ans en production · Accès lecture seule · Code supprimé après livraison
        </p>
      </RevealBlock>
    </header>

    <div id="offres" class="grid scroll-mt-24 gap-8 md:grid-cols-2">
      <AuditOffer v-for="offer in offers" :key="offer.title" v-bind="offer" />
    </div>

    <div class="mt-10 text-center">
      <CalendlyCta :href="CALENDLY_LINK" label="Pas sûr que ce soit le bon format ? Échangeons 15 min" />
      <p class="mt-4 text-xs text-ink/45">
        <RouterLink to="/cgv" class="underline underline-offset-2">CGV complètes</RouterLink>
      </p>
    </div>
  </section>
</template>
