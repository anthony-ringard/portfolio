import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const dataDir = new URL("../data/", import.meta.url);
const forbidden = ["REPLACE_WITH"];
const errors = [];

async function readJsonFiles(dirUrl) {
  const entries = await readdir(dirUrl, { withFileTypes: true });

  for (const entry of entries) {
    const entryUrl = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, dirUrl);

    if (entry.isDirectory()) {
      await readJsonFiles(entryUrl);
      continue;
    }

    if (!entry.name.endsWith(".json")) continue;

    const content = await readFile(entryUrl, "utf8");
    const relativePath = join("data", entry.name);

    for (const token of forbidden) {
      if (content.includes(token)) {
        errors.push(`${relativePath} contains ${token}`);
      }
    }

    try {
      JSON.parse(content);
    } catch (error) {
      errors.push(`${relativePath} is invalid JSON: ${error.message}`);
    }
  }
}

await readJsonFiles(dataDir);

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Content validation passed.");
