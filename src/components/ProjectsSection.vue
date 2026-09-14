<script setup lang="ts">
import { projects, site } from "../lib/content";
import RagFlowDiagram from "./RagFlowDiagram.vue";
import RevealBlock from "./RevealBlock.vue";

const statusStyles: Record<"done" | "progress", string> = {
  done: "text-accent",
  progress: "text-warm",
};
</script>

<template>
  <section id="realisations" class="px-6 py-24 scroll-mt-24 md:py-32">
    <div class="mx-auto max-w-6xl">
      <RevealBlock>
        <p class="section-label">{{ site.sections.projects.label }}</p>
        <h2 class="section-title mt-4">{{ site.sections.projects.title }}</h2>
        <p class="mt-3 max-w-2xl text-sm leading-6 text-ink/55">
          {{ site.sections.projects.description }}
        </p>
      </RevealBlock>

      <div class="project-list mt-14 space-y-6">
        <RevealBlock
          v-for="(project, i) in projects"
          :key="project.id"
          :delay="i * 60"
        >
          <article :class="[i === 0 ? 'project-featured' : 'project-row', 'group']">
            <div class="grid gap-6 lg:grid-cols-[14rem_1fr]">

              <!-- Corps (avant l'aside dans le DOM pour la lecture mobile) -->
              <div class="order-1 min-w-0 lg:order-2">
                <h3 class="text-xl font-semibold leading-tight text-ink md:text-2xl">
                  {{ project.name }}
                </h3>
                <p class="mt-4 max-w-3xl text-sm leading-7 text-ink/70">{{ project.pitch }}</p>

                <RagFlowDiagram v-if="project.visual === 'rag-flow'" />

                <div class="mt-7 grid gap-5 md:grid-cols-2">
                  <div class="project-detail">
                    <p class="project-detail-label">{{ site.ui.projectContext }}</p>
                    <p class="mt-2 text-sm leading-6 text-ink/70">{{ project.context }}</p>
                  </div>
                  <div class="project-detail">
                    <p class="project-detail-label">{{ site.ui.projectRole }}</p>
                    <p class="mt-2 text-sm leading-6 text-ink/70">{{ project.role }}</p>
                  </div>
                </div>

                <div class="mt-6 border-l-2 border-accent/50 pl-4">
                  <p class="text-xs font-semibold text-accent">{{ site.ui.projectProof }}</p>
                  <p class="mt-1.5 max-w-2xl text-sm leading-6 text-ink/75">{{ project.result }}</p>
                </div>

                <ul class="mt-6 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-ink/50">
                  <li v-for="tech in project.stack" :key="tech">{{ tech }}</li>
                </ul>
              </div>

              <!-- Aside -->
              <aside class="order-2 text-sm text-ink/55 lg:order-1 lg:border-r lg:border-line lg:pr-6">
                <div class="project-marker" aria-hidden="true">
                  <span>{{ String(i + 1).padStart(2, "0") }}</span>
                </div>
                <p class="mt-1 text-sm font-medium text-ink/55">{{ project.type }}</p>
                <p
                  class="mt-3 inline-flex rounded-full bg-paper px-3 py-1 text-xs font-semibold"
                  :class="statusStyles[project.statusTone as 'done' | 'progress'] ?? statusStyles.progress"
                >
                  {{ project.status }}
                </p>
                <dl class="mt-5 space-y-2">
                  <div v-for="metric in project.metrics.slice(0, 2)" :key="metric.label">
                    <dt class="text-xs text-ink/40">{{ metric.label }}</dt>
                    <dd class="text-sm font-medium text-ink/75">{{ metric.value }}</dd>
                  </div>
                </dl>
              </aside>

            </div>
          </article>
        </RevealBlock>
      </div>

      <p class="mt-10 max-w-xl text-xs leading-5 text-ink/40">
        Cas anonymisés à partir de l'historique de commits ; volumes, prestataires et noms internes masqués.
      </p>
    </div>
  </section>
</template>
