import { describe, expect, it, beforeEach } from "vitest";
import { setSeo } from "../seo";

describe("setSeo", () => {
  beforeEach(() => {
    document.head.innerHTML = "";
    document.title = "";
  });

  it("met à jour le titre de la page", () => {
    setSeo("Titre test", "Description test", "/test");
    expect(document.title).toBe("Titre test");
  });

  it("crée la balise meta description si absente", () => {
    setSeo("T", "Ma description", "/test");
    const meta = document.querySelector('meta[name="description"]');
    expect(meta?.getAttribute("content")).toBe("Ma description");
  });

  it("met à jour la balise meta description existante sans la dupliquer", () => {
    setSeo("T", "Première", "/test");
    setSeo("T", "Deuxième", "/test");
    const metas = document.querySelectorAll('meta[name="description"]');
    expect(metas.length).toBe(1);
    expect(metas[0].getAttribute("content")).toBe("Deuxième");
  });

  it("met à jour le lien canonical avec le bon chemin, sans dupliquer", () => {
    setSeo("T", "D", "/audit");
    setSeo("T", "D", "/contact");
    const links = document.querySelectorAll('link[rel="canonical"]');
    expect(links.length).toBe(1);
    expect(links[0].getAttribute("href")).toBe("https://anthonyringard.dev/contact");
  });

  it("met à jour og:title, og:description et og:url pour le partage social", () => {
    setSeo("Mon titre", "Ma description", "/audit");
    expect(document.querySelector('meta[property="og:title"]')?.getAttribute("content")).toBe(
      "Mon titre",
    );
    expect(
      document.querySelector('meta[property="og:description"]')?.getAttribute("content"),
    ).toBe("Ma description");
    expect(document.querySelector('meta[property="og:url"]')?.getAttribute("content")).toBe(
      "https://anthonyringard.dev/audit",
    );
  });

  it("met à jour twitter:title et twitter:description", () => {
    setSeo("Mon titre", "Ma description", "/audit");
    expect(
      document.querySelector('meta[name="twitter:title"]')?.getAttribute("content"),
    ).toBe("Mon titre");
    expect(
      document.querySelector('meta[name="twitter:description"]')?.getAttribute("content"),
    ).toBe("Ma description");
  });

  it("ne duplique pas les balises og: au 2e appel", () => {
    setSeo("A", "B", "/audit");
    setSeo("C", "D", "/contact");
    expect(document.querySelectorAll('meta[property="og:title"]').length).toBe(1);
  });
});
