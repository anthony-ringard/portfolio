<script setup lang="ts">
import { profile, site } from "../lib/content";
import RevealBlock from "./RevealBlock.vue";
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
              <a href="#contact" class="primary-button">{{ site.hero.primaryCta }}</a>
              <a href="#realisations" class="secondary-button">{{ site.hero.secondaryCta }}</a>
            </div>
          </RevealBlock>
        </div>

        <!-- Panel flottant -->
        <RevealBlock :delay="200">
          <aside class="hero-panel lg:mt-8">
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
          </aside>
        </RevealBlock>

      </div>
    </div>
  </section>
</template>
