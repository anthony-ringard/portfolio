<script setup lang="ts">
defineProps<{
  title: string;
  regularPrice: number;
  launchPrice: number;
  description: string;
  features: string[];
  stripeLink: string;
}>();
</script>

<template>
  <article class="rounded-2xl border border-line bg-panel p-8 flex flex-col gap-5">
    <header>
      <h3 class="font-display text-2xl text-ink">{{ title }}</h3>
      <p class="mt-2 text-ink-light">{{ description }}</p>
    </header>

    <div class="flex items-baseline gap-3">
      <span class="text-ink-light line-through text-lg">{{ regularPrice }}€</span>
      <span class="text-accent font-display text-4xl">{{ launchPrice }}€</span>
      <span class="text-xs uppercase tracking-wide text-warm">Prix de lancement</span>
    </div>

    <ul class="flex flex-col gap-2">
      <li v-for="feature in features" :key="feature" class="flex items-start gap-2 text-ink-light">
        <span aria-hidden="true" class="text-accent">—</span>
        <span>{{ feature }}</span>
      </li>
    </ul>

    <a
      :href="stripeLink"
      data-testid="buy-audit"
      class="mt-2 inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-panel font-medium hover:bg-accent-dim hover:text-accent transition-colors"
    >
      Acheter cet audit
    </a>
  </article>
</template>
