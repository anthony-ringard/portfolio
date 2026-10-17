<script setup lang="ts">
// Prix de lancement — à retirer/mettre à jour une fois les 3 premiers clients signés.
</script>

<template>
  <div class="launch-banner">
    <p class="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-2 text-xs sm:text-sm">
      <span class="font-semibold uppercase tracking-wide">Prix de lancement</span>
      <span class="hidden sm:inline">—</span>
      <span>
        Audit express
        <span class="opacity-60 line-through">249€</span>
        <strong class="font-bold">149€</strong>
        · résultat sous 5 jours ouvrés
      </span>
      <RouterLink to="/audit" class="ml-1 font-semibold underline underline-offset-2 hover:opacity-80">
        Réserver →
      </RouterLink>
    </p>
  </div>
</template>
