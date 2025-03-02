import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/DEV-Portifolio/", // 🔥 Define a base correta para GitHub Pages
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true, // 🔥 Garante que a pasta dist seja limpa antes do build
    manifest: true, // 🔥 Garante que os arquivos sejam mapeados corretamente
  },
});
