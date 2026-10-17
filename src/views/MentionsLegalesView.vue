<script setup lang="ts">
import { computed } from "vue";
import { profile } from "../lib/content";
import { buildMailHref, revealEmail } from "../lib/email";
import { useSeo } from "../composables/useSeo";

useSeo(
  "Mentions légales — Anthony Ringard",
  "Mentions légales du site anthonyringard.dev : éditeur, hébergement, propriété intellectuelle, données personnelles.",
  "/mentions-legales",
);

const email = computed(() => revealEmail(profile.contact.emailObfuscated));
const mailHref = computed(() => buildMailHref(email.value, "Question mentions légales", ""));
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 py-20 md:py-28">
    <p class="section-label">Informations légales</p>
    <h1 class="font-display mt-4 text-3xl text-ink md:text-4xl">Mentions légales</h1>

    <div class="prose-cgv mt-10 space-y-8 text-sm leading-7 text-ink/75">
      <section>
        <h2 class="text-base font-semibold text-ink">Éditeur du site</h2>
        <p class="mt-2">
          <strong>{{ profile.name }}</strong><br />
          Entreprise individuelle (micro-entrepreneur)<br />
          SIRET : 109 001 685 00014<br />
          Domicilié dans le département du Nord (62), France<br />
          Contact : <a :href="mailHref" class="underline underline-offset-2">{{ email }}</a>
        </p>
        <p class="mt-2">
          Directeur de la publication : {{ profile.name }}.
        </p>
      </section>

      <section>
        <h2 class="text-base font-semibold text-ink">Hébergement</h2>
        <p class="mt-2">
          Ce site est hébergé par :<br />
          Cloudflare, Inc.<br />
          101 Townsend St, San Francisco, CA 94107, États-Unis<br />
          <a
            href="https://www.cloudflare.com"
            target="_blank"
            rel="noopener noreferrer"
            class="underline underline-offset-2"
          >www.cloudflare.com</a
          >
        </p>
      </section>

      <section>
        <h2 class="text-base font-semibold text-ink">Propriété intellectuelle</h2>
        <p class="mt-2">
          L'ensemble du contenu de ce site (textes, visuels, code source du site lui-même) est la
          propriété de {{ profile.name }}, sauf mention contraire. Toute reproduction sans
          autorisation préalable est interdite.
        </p>
      </section>

      <section>
        <h2 class="text-base font-semibold text-ink">Données personnelles</h2>
        <p class="mt-2">
          Les données transmises via ce site (email, formulaires de contact, informations de
          facturation) sont utilisées uniquement pour répondre à vos demandes et gérer les
          commandes. Conformément au RGPD, vous pouvez demander l'accès, la rectification ou la
          suppression de vos données en écrivant à
          <a :href="mailHref" class="underline underline-offset-2">{{ email }}</a>.
        </p>
        <p class="mt-2">
          Ce site ne dépose pas de cookie de suivi publicitaire ni d'outil d'analytics tiers à ce
          jour.
        </p>
      </section>

      <section>
        <h2 class="text-base font-semibold text-ink">Liens utiles</h2>
        <p class="mt-2">
          <RouterLink to="/cgv" class="underline underline-offset-2"
            >Conditions générales de vente</RouterLink
          >
        </p>
      </section>
    </div>
  </section>
</template>
