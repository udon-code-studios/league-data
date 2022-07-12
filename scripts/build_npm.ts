/**
 * usage:
 *  deno run -A scripts/build_npm.ts <version-tag>
 *  cd npm
 *  npm publish
 */

import { build, emptyDir } from "https://deno.land/x/dnt@0.28.0/mod.ts";

await emptyDir("./npm");

await build({
  //typeCheck: false,
  //test: false,
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  package: {
    // package.json properties
    name: "league-data",
    version: Deno.args[0],
    description: "Provides official League of Legends game data and static content links.",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/udon-code-studios/league-data.git",
    },
    bugs: {
      url: "https://github.com/udon-code-studios/league-data/issues",
    },
  },
});

// post build steps
// Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");
