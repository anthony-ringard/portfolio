<script setup lang="ts">
import AboutSection from "./components/AboutSection.vue";
import ContactSection from "./components/ContactSection.vue";
import ExpertisesSection from "./components/ExpertisesSection.vue";
import HeroSection from "./components/HeroSection.vue";
import MissionsSection from "./components/MissionsSection.vue";
import NavBar from "./components/NavBar.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
</script>

<template>
  <div aria-hidden="true" class="bg-grid"></div>
  <div aria-hidden="true" class="scroll-progress"></div>
  <NavBar />
  <main id="main" class="overflow-x-hidden">
    <HeroSection />
    <MissionsSection />
    <ProjectsSection />
    <ExpertisesSection />
    <AboutSection />
    <ContactSection />
  </main>
</template>
