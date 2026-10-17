<script setup lang="ts">
defineProps<{
  calendlyHref: string;
  mailHref: string;
}>();
</script>

<template>
  <div
    class="contact-panel flex flex-col items-center gap-4 rounded-2xl border border-line bg-panel px-6 py-6 text-center sm:flex-row sm:justify-between sm:text-left md:px-8"
  >
    <p class="font-display text-base text-ink md:text-lg">
      Un flux à fiabiliser ou à automatiser ? Discutons-en 15 minutes.
    </p>
    <div class="flex flex-wrap items-center justify-center gap-3">
      <a
        :href="calendlyHref"
        data-testid="mid-cta-calendly"
        target="_blank"
        rel="noopener noreferrer"
        class="primary-button whitespace-nowrap"
      >
        Réserver un appel
      </a>
      <a :href="mailHref" data-testid="mid-cta-mail" class="secondary-button whitespace-nowrap">
        Écrire un email
      </a>
    </div>
  </div>
</template>
