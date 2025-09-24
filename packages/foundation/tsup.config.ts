import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  splitting: true,
  sourcemap: true,
  clean: true,
  dts: true,
  minify: true,
  format: ["esm", "cjs"],
  entry: ["src/index.ts"],
  external: ["react", "react-dom"],
  ...options,
}));
