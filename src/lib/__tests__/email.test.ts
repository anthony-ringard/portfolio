import { describe, expect, it } from "vitest";
import { buildMailHref, obfuscateEmail, revealEmail } from "../email";

describe("email obfuscation", () => {
  it("obfuscateEmail ne laisse jamais apparaître l'adresse en clair dans le résultat", () => {
    const obfuscated = obfuscateEmail("anthony.ringard@gmail.com");
    expect(obfuscated).not.toContain("anthony.ringard@gmail.com");
    expect(obfuscated).not.toContain("@");
  });

  it("revealEmail(obfuscateEmail(x)) redonne exactement x", () => {
    const original = "anthony.ringard@gmail.com";
    expect(revealEmail(obfuscateEmail(original))) .toBe(original);
  });

  it("buildMailHref construit un mailto: avec subject et body encodés", () => {
    const href = buildMailHref("a@b.com", "Sujet test", "Corps\ndu message");
    expect(href).toBe("mailto:a@b.com?subject=Sujet%20test&body=Corps%0Adu%20message");
  });
});
