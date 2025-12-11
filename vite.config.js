import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./client/src"),
      "@assets": path.resolve(import.meta.dirname, "./client/src/assets"),
      "@components": path.resolve(import.meta.dirname, "./client/src/components"),
      "@sections": path.resolve(import.meta.dirname, "./client/src/sections")
    }
  },
  root: "./client",
  build: {
    outDir: "../dist",
    emptyOutDir: true
  }
});
