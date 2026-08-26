<script setup lang="ts">
import { computed } from "vue";
import { profile, site } from "../lib/content";
import RevealBlock from "./RevealBlock.vue";

const subject = encodeURIComponent(site.ui.mailSubject);
const body = encodeURIComponent(site.ui.mailBody);
const mailHref = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`;

const socialLinks = computed(() =>
  [
    { href: profile.contact.malt, label: site.ui.socialMalt },
    { href: profile.contact.linkedin, label: site.ui.socialLinkedin },
  ].filter((l) => Boolean(l.href)),
);
</script>

<template>
  <section id="contact" class="px-6 py-24 scroll-mt-24 md:py-28">
    <div class="mx-auto max-w-6xl">
      <RevealBlock>
        <div class="dark-contact-panel relative overflow-hidden rounded-2xl bg-ink px-8 py-14 md:px-12 md:py-16">
          <!-- Lueurs de fond -->
          <div
            aria-hidden="true"
            class="pointer-events-none absolute inset-0"
            style="
              background:
                radial-gradient(600px 300px at 8% 0%, rgba(15,118,101,0.32), transparent 60%),
                radial-gradient(500px 280px at 100% 110%, rgba(154,91,46,0.24), transparent 55%);
            "
          ></div>

          <div class="relative">
            <p class="inline-flex items-center gap-3 text-sm font-medium text-accent">
              <span aria-hidden="true" class="h-px w-8 bg-accent/40 inline-block"></span>
              {{ site.sections.contact.label }}
            </p>

            <div class="mt-6 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <h2 class="max-w-xl text-2xl font-semibold leading-tight text-paper md:text-3xl">
                  {{ site.sections.contact.title }}
                </h2>
                <p class="mt-4 max-w-lg text-sm leading-7 text-paper/70">
                  {{ site.sections.contact.description }}
                </p>
              </div>

              <a
                :href="mailHref"
                :aria-label="`Envoyer un email à ${profile.contact.email}`"
                class="inline-flex max-w-full items-center truncate rounded-md bg-paper px-5 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00c896]"
              >
                {{ profile.contact.email }}
              </a>
            </div>

            <p class="mt-8 text-xs text-paper/50">
              {{ profile.availability }}.
            </p>

            <div v-if="socialLinks.length" class="mt-4 flex flex-wrap gap-4 text-sm text-paper/50">
              <a
                v-for="link in socialLinks"
                :key="link.label"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="transition-colors hover:text-accent"
              >{{ link.label }}</a>
            </div>
          </div>
        </div>
      </RevealBlock>
    </div>
  </section>
</template>
