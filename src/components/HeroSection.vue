<script setup lang="ts">
import { computed } from "vue";
import { profile, site } from "../lib/content";
import { CALENDLY_LINK } from "../lib/constants";
import { buildMailHref, revealEmail } from "../lib/email";
import MidPageCta from "./MidPageCta.vue";
import RevealBlock from "./RevealBlock.vue";

const mailHref = computed(() =>
  buildMailHref(
    revealEmail(profile.contact.emailObfuscated),
    site.ui.mailSubject,
    site.ui.mailBody,
  ),
);
</script>

<template>
  <section id="top" class="hero-shell px-6 pb-24 pt-28 scroll-mt-24 md:pb-32 md:pt-36">
    <div class="mx-auto max-w-6xl">
      <div class="grid gap-14 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">

        <!-- Colonne principale -->
        <div class="min-w-0">
          <RevealBlock>
            <p class="section-label">{{ site.hero.eyebrow }}</p>
          </RevealBlock>

          <RevealBlock :delay="80">
            <h1 class="hero-title mt-6 text-[2.4rem] font-semibold leading-[1.06] text-ink sm:text-5xl md:text-6xl">
              {{ profile.headline }}
            </h1>
            <p class="mt-6 max-w-2xl text-lg leading-8 text-ink/68">
              {{ profile.pitch }}
            </p>
            <p class="mt-5 text-sm font-medium text-accent">
              {{ profile.name }} · {{ profile.role }}
            </p>
          </RevealBlock>

          <RevealBlock :delay="160">
            <dl class="mt-10 grid gap-3 sm:grid-cols-3">
              <div
                v-for="card in profile.missionCards"
                :key="card.label"
                class="metric-tile metric-tile--hero px-4 py-4"
              >
                <dt class="text-xs font-medium text-ink/50">{{ card.label }}</dt>
                <dd class="mt-2 text-base font-semibold text-ink">{{ card.value }}</dd>
                <dd class="mt-0.5 text-xs text-ink/60">{{ card.detail }}</dd>
              </div>
            </dl>

            <div class="mt-8 flex flex-wrap items-center gap-3">
              <RouterLink to="/contact" class="primary-button">{{ site.hero.primaryCta }}</RouterLink>
              <a href="#realisations" class="secondary-button">{{ site.hero.secondaryCta }}</a>
              <a
                v-if="profile.contact.cv"
                :href="profile.contact.cv"
                target="_blank"
                rel="noopener noreferrer"
                class="secondary-button"
              >{{ site.hero.cvCta }}</a>
            </div>
          </RevealBlock>

          <RevealBlock :delay="120">
            <div class="mt-8">
              <MidPageCta :calendly-href="CALENDLY_LINK" :mail-href="mailHref" />
            </div>
          </RevealBlock>
        </div>

        <!-- Colonne photo + process -->
        <RevealBlock :delay="120">
          <aside class="lg:mt-8 flex flex-col gap-5">
            <figure class="hero-portrait">
              <img
                src="/anthony-portrait.jpg"
                :alt="`Portrait de ${profile.name}`"
                class="hero-portrait-img"
                width="640"
                height="640"
              />
              <figcaption class="hero-portrait-caption">
                <span class="hero-portrait-dot" aria-hidden="true"></span>
                Disponible — réponse sous 24h
              </figcaption>
            </figure>

            <div class="hero-panel hero-panel--compact">
              <div class="hero-signal" aria-hidden="true">
                <span class="hero-signal-line"></span>
                <span v-for="index in 5" :key="index" class="hero-signal-node"></span>
              </div>

              <p class="text-xs font-semibold uppercase tracking-wider text-ink/45">
                {{ site.hero.diagramTitle }}
              </p>
              <ol class="mt-4 space-y-2.5">
                <li
                  v-for="(step, index) in site.hero.diagramSteps"
                  :key="step"
                  class="workflow-step"
                >
                  <span class="workflow-index">0{{ index + 1 }}</span>
                  <span>{{ step }}</span>
                </li>
              </ol>
              <p class="mt-4 text-xs leading-5 text-ink/50">{{ site.hero.diagramFootnote }}</p>
            </div>
          </aside>
        </RevealBlock>

      </div>
    </div>
  </section>
</template>
