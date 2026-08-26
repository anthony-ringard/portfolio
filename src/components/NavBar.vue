<script setup lang="ts">
import { site } from "../lib/content";
</script>

<template>
  <header class="nav-shell sticky top-0 z-50 border-b border-line bg-panel/86 backdrop-blur-md">
    <a href="#main" class="skip-link">
      {{ site.ui.skipLink }}
    </a>
    <nav class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5 sm:px-6">
      <a href="#top" class="flex items-center gap-2 text-sm font-semibold text-ink">
        <span aria-hidden="true" class="h-2 w-2 rounded-full bg-warm"></span>
        A.RINGARD
      </a>
      <ul class="hidden gap-7 text-sm text-ink/62 md:flex">
        <li v-for="link in site.nav" :key="link.href">
          <a :href="link.href" class="nav-link transition-colors hover:text-accent">
            {{ link.label }}
          </a>
        </li>
      </ul>
      <a
        href="#contact"
        class="nav-contact rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent/50 hover:text-accent sm:px-5"
      >
        {{ site.ui.navContact }}
      </a>
    </nav>
  </header>
</template>
