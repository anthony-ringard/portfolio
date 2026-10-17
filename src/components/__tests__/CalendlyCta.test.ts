import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import CalendlyCta from "../CalendlyCta.vue";

describe("CalendlyCta", () => {
  it("pointe vers le lien Calendly fourni en prop", () => {
    const wrapper = mount(CalendlyCta, {
      props: { href: "https://calendly.com/anthony-ringard/15min" },
    });
    const link = wrapper.find("a[data-testid='calendly-link']");
    expect(link.exists()).toBe(true);
    expect(link.attributes("href")).toBe("https://calendly.com/anthony-ringard/15min");
  });

  it("ouvre dans un nouvel onglet sans exposer de referrer", () => {
    const wrapper = mount(CalendlyCta, {
      props: { href: "https://calendly.com/anthony-ringard/15min" },
    });
    const link = wrapper.find("a[data-testid='calendly-link']");
    expect(link.attributes("target")).toBe("_blank");
    expect(link.attributes("rel")).toContain("noopener");
  });

  it("affiche un texte d'accroche optionnel passé en prop", () => {
    const wrapper = mount(CalendlyCta, {
      props: {
        href: "https://calendly.com/anthony-ringard/15min",
        label: "Échanger 15 min avant d'acheter",
      },
    });
    expect(wrapper.text()).toContain("Échanger 15 min avant d'acheter");
  });
});
