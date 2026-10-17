import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import LaunchBanner from "../LaunchBanner.vue";

describe("LaunchBanner", () => {
  it("affiche l'ancien prix barré et le prix de lancement", () => {
    const wrapper = mount(LaunchBanner);
    const text = wrapper.text();
    expect(text).toContain("249€");
    expect(text).toContain("149€");
  });

  it("le lien Réserver pointe vers /audit", () => {
    const wrapper = mount(LaunchBanner, {
      global: { stubs: { RouterLink: { template: "<a :href=\"to\"><slot /></a>", props: ["to"] } } },
    });
    const link = wrapper.find("a");
    expect(link.attributes("href")).toBe("/audit");
  });
});
