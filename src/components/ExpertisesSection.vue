<script setup lang="ts">
import { expertises, missions, site } from "../lib/content";
import RevealBlock from "./RevealBlock.vue";
</script>

<template>
  <section id="expertises" class="section-band px-6 py-24 scroll-mt-24 md:py-28">
    <div class="mx-auto max-w-6xl">
      <RevealBlock>
        <p class="section-label">{{ site.sections.expertises.label }}</p>
        <h2 class="section-title mt-4">{{ site.sections.expertises.title }}</h2>
        <p class="mt-4 max-w-2xl text-sm leading-6 text-ink/60">{{ site.sections.expertises.intro }}</p>
      </RevealBlock>

      <!-- Lignes d'expertise -->
      <div class="mt-12 border-t border-line">
        <RevealBlock v-for="(item, i) in expertises" :key="item.id" :delay="i * 80">
          <article
            class="expertise-row grid gap-6 border-b border-line py-7 md:grid-cols-[0.9fr_1.6fr]"
          >
            <div>
              <span class="expertise-index text-sm font-semibold text-accent/70">0{{ i + 1 }}</span>
              <h3 class="mt-3 text-lg font-semibold text-ink">{{ item.title }}</h3>
              <p class="mt-2 text-sm leading-6 text-ink/60">{{ item.summary }}</p>
            </div>
            <ul class="space-y-3 md:pt-6">
              <li
                v-for="point in item.points"
                :key="point"
                class="flex gap-3 text-sm leading-6 text-ink/68"
              >
                <span aria-hidden="true" class="mt-2 h-px w-4 shrink-0 bg-accent/65"></span>
                {{ point }}
              </li>
            </ul>
          </article>
        </RevealBlock>
      </div>

      <!-- Bon contexte + Repères -->
      <RevealBlock :delay="360">
        <div class="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h3 class="text-xs font-semibold uppercase tracking-wider text-ink/45">
              {{ site.ui.goodFitTitle }}
            </h3>
            <ul class="mt-5 space-y-3">
              <li
                v-for="item in missions.goodFit"
                :key="item"
                class="text-sm leading-6 text-ink/68"
              >{{ item }}</li>
            </ul>
          </div>
          <div class="border-t border-line pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <h3 class="text-xs font-semibold uppercase tracking-wider text-ink/45">
              {{ site.ui.aboutMarkersTitle }}
            </h3>
            <ul class="mt-5 space-y-4">
              <li
                v-for="(trait, i) in site.ui.aboutMarkers"
                :key="trait.label"
                class="flex gap-3"
              >
                <span class="mt-0.5 w-6 shrink-0 text-sm font-semibold text-accent/70">0{{ i + 1 }}</span>
                <div>
                  <p class="text-sm font-medium text-ink">{{ trait.label }}</p>
                  <p class="mt-0.5 text-sm leading-6 text-ink/60">{{ trait.detail }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </RevealBlock>
    </div>
  </section>
</template>
