<script setup lang="ts">
import AppFooter from "./components/AppFooter.vue";
import LaunchBanner from "./components/LaunchBanner.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div aria-hidden="true" class="bg-grid"></div>
  <div aria-hidden="true" class="scroll-progress"></div>
  <div class="sticky top-0 z-50">
    <LaunchBanner />
    <NavBar />
  </div>
  <main id="main" class="overflow-x-hidden">
    <RouterView />
  </main>
  <AppFooter />
</template>
