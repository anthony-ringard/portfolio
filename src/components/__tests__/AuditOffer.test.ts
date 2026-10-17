import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import AuditOffer from "../AuditOffer.vue";

const baseProps = {
  title: "Audit Express",
  regularPrice: 249,
  launchPrice: 149,
  description: "Analyse de la dette technique et des risques prioritaires.",
  features: ["Scope : 1 service, jusqu'à 50 fichiers", "Rapport structuré sous 5 jours ouvrés"],
  stripeLink: "https://buy.stripe.com/test_xxx",
};

describe("AuditOffer", () => {
  it("affiche le prix barré et le prix de lancement", () => {
    const wrapper = mount(AuditOffer, { props: baseProps });
    expect(wrapper.text()).toContain("249");
    expect(wrapper.text()).toContain("149");
  });

  it("affiche le titre et la description de l'offre", () => {
    const wrapper = mount(AuditOffer, { props: baseProps });
    expect(wrapper.text()).toContain("Audit Express");
    expect(wrapper.text()).toContain("Analyse de la dette technique");
  });

  it("liste les features de l'offre", () => {
    const wrapper = mount(AuditOffer, { props: baseProps });
    for (const feature of baseProps.features) {
      expect(wrapper.text()).toContain(feature);
    }
  });

  it("le bouton d'achat pointe vers le Payment Link Stripe fourni en prop, jamais une clé en dur", () => {
    const wrapper = mount(AuditOffer, { props: baseProps });
    const link = wrapper.find("a[data-testid='buy-audit']");
    expect(link.exists()).toBe(true);
    expect(link.attributes("href")).toBe(baseProps.stripeLink);
  });

  it("n'affiche jamais de clé Stripe secrète dans le DOM rendu", () => {
    const wrapper = mount(AuditOffer, { props: baseProps });
    expect(wrapper.html()).not.toMatch(/sk_(live|test)_/);
  });
});
