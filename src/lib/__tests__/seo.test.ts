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
});
