<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const props = withDefaults(
  defineProps<{
    delay?: number;
    className?: string;
  }>(),
  {
    delay: 0,
    className: "",
  },
);

const root = ref<HTMLElement | null>(null);
const isVisible = ref(false);
let observer: IntersectionObserver | null = null;

const revealStyle = computed(() => ({
  "--reveal-delay": `${props.delay}ms`,
}));

onMounted(() => {
  if (!root.value) {
    return;
  }

  const rect = root.value.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    isVisible.value = true;
    return;
  }

  if (!("IntersectionObserver" in window)) {
    isVisible.value = true;
    return;
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer?.disconnect();
      }
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.12,
    },
  );

  observer.observe(root.value);
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>

<template>
  <div ref="root" class="reveal" :class="[className, { 'is-visible': isVisible }]" :style="revealStyle">
    <slot />
  </div>
</template>
