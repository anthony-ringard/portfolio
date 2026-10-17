<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <footer class="border-t border-line px-6 py-8">
    <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-xs text-ink/45">
      <p>© {{ year }} Anthony Ringard</p>
      <div class="flex gap-4">
        <RouterLink to="/mentions-legales" class="underline underline-offset-2 hover:text-ink/70"
          >Mentions légales</RouterLink
        >
        <RouterLink to="/cgv" class="underline underline-offset-2 hover:text-ink/70">CGV</RouterLink>
      </div>
    </div>
  </footer>
</template>
