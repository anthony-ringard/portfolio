import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import NavBar from "../NavBar.vue";

async function mountWithRouter(initialPath: string) {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", name: "home", component: { template: "<div />" } },
      { path: "/audit", name: "audit", component: { template: "<div />" } },
      { path: "/contact", name: "contact", component: { template: "<div />" } },
    ],
  });
  router.push(initialPath);
  await router.isReady();
  const wrapper = mount(NavBar, { global: { plugins: [router] } });
  return { wrapper, router };
}

describe("NavBar", () => {
  it("les liens de section ramènent vers / avec le hash, même depuis une autre page", async () => {
    const { wrapper } = await mountWithRouter("/audit");
    const links = wrapper.findAllComponents({ name: "RouterLink" });
    const missionsLink = links.find((l) => l.text().includes("missions"));
    expect(missionsLink).toBeTruthy();
    expect(missionsLink!.props("to")).toMatchObject({ path: "/", hash: "#missions" });
  });

  it("le logo ramène vers / (pas juste #top) depuis une autre page", async () => {
    const { wrapper } = await mountWithRouter("/audit");
    const logoLink = wrapper.findComponent({ name: "RouterLink" });
    expect(logoLink.props("to")).toMatchObject({ path: "/", hash: "#top" });
  });

  it("le bouton Contact pointe vers la page /contact dédiée, pas un hash", async () => {
    const { wrapper } = await mountWithRouter("/");
    const links = wrapper.findAllComponents({ name: "RouterLink" });
    const contactLink = links.find((l) => l.text().trim() === "Contact");
    expect(contactLink).toBeTruthy();
    expect(contactLink!.props("to")).toBe("/contact");
  });
});
