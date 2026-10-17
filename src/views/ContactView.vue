<script setup lang="ts">
import { computed } from "vue";
import { profile, site } from "../lib/content";
import { CALENDLY_LINK } from "../lib/constants";
import { buildMailHref, revealEmail } from "../lib/email";
import RevealBlock from "../components/RevealBlock.vue";
import { useSeo } from "../composables/useSeo";

useSeo(
  "Contact — Anthony Ringard, freelance PHP/Symfony",
  "Réservez un appel de 15 minutes ou contactez-moi directement sur LinkedIn ou par email pour discuter de votre projet Symfony ou e-commerce.",
  "/contact",
);

const email = computed(() => revealEmail(profile.contact.emailObfuscated));
const mailHref = computed(() =>
  buildMailHref(email.value, site.ui.mailSubject, site.ui.mailBody),
);

const maltLink = computed(() =>
  profile.contact.malt ? { href: profile.contact.malt, label: site.ui.socialMalt } : null,
);
</script>

<template>
  <section class="px-6 py-20 md:py-28">
    <div class="mx-auto max-w-5xl">
      <RevealBlock>
        <div
          class="relative overflow-hidden rounded-2xl px-8 py-14 md:px-12 md:py-16"
          style="background: linear-gradient(135deg, #04565f 0%, #009FAF 55%, #0a7b88 100%);"
        >
          <!-- Lueurs de fond -->
          <div
            aria-hidden="true"
            class="pointer-events-none absolute inset-0"
            style="
              background:
                radial-gradient(500px 260px at 92% -10%, rgba(255,255,255,0.16), transparent 60%),
                radial-gradient(420px 260px at 0% 110%, rgba(216,200,168,0.25), transparent 55%);
            "
          ></div>

          <div class="relative">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in ['Paiement e-commerce', 'Automatisation IA', 'Symfony senior']"
                :key="tag"
                class="rounded-full border border-paper/30 bg-paper/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-paper"
              >{{ tag }}</span>
            </div>

            <h1 class="font-display mt-6 max-w-xl text-3xl leading-tight text-paper md:text-4xl">
              {{ site.sections.contact.title }}
            </h1>
            <p class="mt-4 max-w-lg text-sm leading-7 text-paper/85">
              {{ site.sections.contact.description }}
            </p>

            <div class="mt-8 grid gap-4 sm:grid-cols-3">
              <a
                :href="CALENDLY_LINK"
                data-testid="contact-calendly"
                target="_blank"
                rel="noopener noreferrer"
                class="contact-channel-card"
              >
                <span class="text-sm font-semibold text-ink">Réserver un appel</span>
                <span class="mt-1 text-xs text-ink/60">15 min, sans engagement</span>
              </a>
              <a
                :href="profile.contact.linkedin"
                data-testid="contact-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="contact-channel-card"
              >
                <span class="text-sm font-semibold text-ink">Me contacter sur LinkedIn</span>
                <span class="mt-1 text-xs text-ink/60">Message direct</span>
              </a>
              <a
                :href="mailHref"
                data-testid="contact-email"
                :aria-label="`Envoyer un email à ${email}`"
                class="contact-channel-card"
              >
                <span class="text-sm font-semibold text-ink">Envoyer un email</span>
                <span class="mt-1 truncate text-xs text-ink/60">{{ email }}</span>
              </a>
            </div>

            <p class="mt-8 text-xs text-paper/70">
              {{ profile.availability }}.
            </p>

            <div v-if="maltLink" class="mt-4 flex flex-wrap gap-4 text-sm text-paper/70">
              <a
                :href="maltLink.href"
                target="_blank"
                rel="noopener noreferrer"
                class="transition-colors hover:text-paper"
              >{{ maltLink.label }}</a>
            </div>
          </div>
        </div>
      </RevealBlock>
    </div>
  </section>
</template>
