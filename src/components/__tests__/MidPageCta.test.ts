import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import MidPageCta from "../MidPageCta.vue";

describe("MidPageCta", () => {
  it("affiche un lien Calendly et un lien mailto", () => {
    const wrapper = mount(MidPageCta, {
      props: { calendlyHref: "https://calendly.com/x/15min", mailHref: "mailto:a@b.com" },
    });
    expect(wrapper.find("a[data-testid='mid-cta-calendly']").attributes("href")).toBe(
      "https://calendly.com/x/15min",
    );
    expect(wrapper.find("a[data-testid='mid-cta-mail']").attributes("href")).toBe("mailto:a@b.com");
  });
});
