import preact from "@preact/preset-vite";
import { resolve } from "path";
import type { UserConfig } from "vite";

const config: UserConfig = {
  base: "",
  plugins: [preact()],
  build: {
    outDir: resolve("docs"),
  },
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
  resolve: {
    alias: [{ find: "@", replacement: resolve("src") }],
  },
};

export default config;
