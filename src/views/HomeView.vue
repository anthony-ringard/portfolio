<script setup lang="ts">
import AboutSection from "../components/AboutSection.vue";
import ExpertisesSection from "../components/ExpertisesSection.vue";
import HeroSection from "../components/HeroSection.vue";
import MissionsSection from "../components/MissionsSection.vue";
import ProjectsSection from "../components/ProjectsSection.vue";
import { useSeo } from "../composables/useSeo";

useSeo(
  "Anthony Ringard — Freelance PHP/Symfony senior | Paiement & flux e-commerce",
  "Je fiabilise les flux métier des sites e-commerce : paiement (Stripe, Klarna, Alma), commandes, catalogue, logistique. 12 ans de backend PHP/Symfony, automatisation IA. Audit de code express disponible.",
  "/",
);
</script>

<template>
  <HeroSection />
  <MissionsSection />
  <ProjectsSection />
  <ExpertisesSection />
  <AboutSection />
</template>
