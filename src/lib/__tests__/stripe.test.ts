import { describe, expect, it } from "vitest";
import { stripeLink } from "../stripe";

describe("stripeLink", () => {
  it("retourne le lien de test quand isProd=false", () => {
    expect(stripeLink(false, "https://buy.stripe.com/live_x", "https://buy.stripe.com/test_x")).toBe(
      "https://buy.stripe.com/test_x",
    );
  });

  it("retourne le lien live quand isProd=true", () => {
    expect(stripeLink(true, "https://buy.stripe.com/live_x", "https://buy.stripe.com/test_x")).toBe(
      "https://buy.stripe.com/live_x",
    );
  });
});
