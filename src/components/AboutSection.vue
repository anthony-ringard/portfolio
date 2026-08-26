<script setup lang="ts">
import { profile, site } from "../lib/content";
import RevealBlock from "./RevealBlock.vue";
</script>

<template>
  <section id="about" class="px-6 py-24 scroll-mt-24 md:py-28">
    <div class="mx-auto max-w-6xl">
      <div class="grid gap-12 md:grid-cols-[1fr_16rem] md:items-start">
        <div>
          <RevealBlock>
            <p class="section-label">{{ site.sections.about.label }}</p>
            <h2 class="section-title mt-4">{{ site.sections.about.title }}</h2>
          </RevealBlock>

          <RevealBlock :delay="80">
            <div class="mt-8 space-y-5">
              <p
                v-for="paragraph in profile.about"
                :key="paragraph"
                class="max-w-2xl text-sm leading-7 text-ink/68"
              >{{ paragraph }}</p>
            </div>
          </RevealBlock>
        </div>

        <RevealBlock :delay="160">
          <div class="metric-tile px-5 py-5">
            <p class="text-xs font-medium text-ink/50">{{ site.sections.about.statLabel }}</p>
            <p class="mt-2 text-2xl font-semibold text-ink">{{ site.sections.about.statValue }}</p>
            <p class="mt-1.5 text-xs leading-5 text-ink/55">{{ site.sections.about.statDetail }}</p>
          </div>
        </RevealBlock>
      </div>
    </div>
  </section>
</template>
