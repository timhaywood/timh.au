import { resolve } from "path";
import { defineConfig } from "vite";
import glob from "glob";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: glob.sync(resolve(__dirname, "src", "**/*.html")),
    },
  },
});
