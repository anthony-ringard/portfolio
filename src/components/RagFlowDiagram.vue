<script setup lang="ts">
const steps = [
  { label: "Requête", detail: "Question posée" },
  { label: "Recherche", detail: "Documents vectorisés" },
  { label: "Outils", detail: "BDD, API, calculs" },
  { label: "Réponse", detail: "Générée, sourcée" },
];
</script>

<template>
  <div class="rag-diagram mt-6 flex flex-wrap items-stretch gap-2" aria-hidden="true">
    <template v-for="(step, index) in steps" :key="step.label">
      <div class="rag-diagram-step flex min-w-[7rem] flex-1 flex-col items-center gap-1 rounded-xl border border-line bg-paper px-3 py-3 text-center">
        <span class="text-xs font-semibold text-ink">{{ step.label }}</span>
        <span class="text-[0.68rem] leading-4 text-ink/50">{{ step.detail }}</span>
      </div>
      <div
        v-if="index < steps.length - 1"
        class="flex items-center justify-center text-accent/60"
      >
        →
      </div>
    </template>
  </div>
</template>
