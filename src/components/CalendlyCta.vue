<script setup lang="ts">
withDefaults(
  defineProps<{
    href: string;
    label?: string;
  }>(),
  { label: "Échanger avant d'acheter" },
);
</script>

<template>
  <a
    :href="href"
    data-testid="calendly-link"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center gap-2 text-sm font-medium text-ink-light underline decoration-line underline-offset-4 hover:text-accent"
  >
    {{ label }}
  </a>
</template>
