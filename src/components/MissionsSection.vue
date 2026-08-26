<script setup lang="ts">
import { missions, site } from "../lib/content";
import RevealBlock from "./RevealBlock.vue";
</script>

<template>
  <section id="missions" class="section-band px-6 py-24 scroll-mt-24 md:py-28">
    <div class="mx-auto max-w-6xl">
      <RevealBlock>
        <p class="section-label">{{ site.sections.missions.label }}</p>
        <h2 class="section-title mt-4">{{ site.sections.missions.title }}</h2>
      </RevealBlock>

      <div class="mt-14 grid gap-10 lg:grid-cols-3">
        <RevealBlock
          v-for="(mission, index) in missions.items"
          :key="mission.title"
          :delay="index * 80"
        >
          <article class="panel h-full pt-6">
            <span class="text-sm font-semibold text-accent/80">0{{ index + 1 }}</span>
            <h3 class="mt-3 text-xl font-semibold text-ink">{{ mission.title }}</h3>
            <p class="mt-3 text-sm leading-6 text-ink/62">{{ mission.summary }}</p>
            <ul class="mt-5 space-y-3">
              <li
                v-for="point in mission.points"
                :key="point"
                class="flex gap-3 text-sm leading-6 text-ink/68"
              >
                <span aria-hidden="true" class="mt-2 h-px w-4 shrink-0 bg-accent/65"></span>
                {{ point }}
              </li>
            </ul>
            <p class="mt-6 text-sm font-medium text-ink">{{ mission.outcome }}</p>
          </article>
        </RevealBlock>
      </div>

      <!-- Bon contexte seul — sobre, en pied de section -->
      <RevealBlock :delay="280">
        <div class="mt-14 border-t border-line pt-8">
          <h3 class="text-xs font-semibold uppercase tracking-wider text-ink/45">
            {{ site.ui.goodFitTitle }}
          </h3>
          <ul class="mt-5 grid grid-cols-1 gap-y-2 gap-x-10 sm:grid-cols-2">
            <li
              v-for="item in missions.goodFit"
              :key="item"
              class="text-sm text-ink/65"
            >{{ item }}</li>
          </ul>
        </div>
      </RevealBlock>
    </div>
  </section>
</template>
