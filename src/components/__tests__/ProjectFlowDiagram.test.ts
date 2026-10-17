import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import ProjectFlowDiagram from "../ProjectFlowDiagram.vue";

const steps = [
  { label: "Commande", detail: "Reçue" },
  { label: "Paiement", detail: "Stripe/Klarna/Alma" },
  { label: "Validation", detail: "IBAN virtuel" },
];

describe("ProjectFlowDiagram", () => {
  it("affiche chaque étape avec son label et son détail", () => {
    const wrapper = mount(ProjectFlowDiagram, { props: { steps } });
    for (const step of steps) {
      expect(wrapper.text()).toContain(step.label);
      expect(wrapper.text()).toContain(step.detail);
    }
  });

  it("affiche une flèche entre chaque étape, pas après la dernière", () => {
    const wrapper = mount(ProjectFlowDiagram, { props: { steps } });
    const arrows = wrapper.findAll("[data-testid='flow-arrow']");
    expect(arrows).toHaveLength(steps.length - 1);
  });
});
