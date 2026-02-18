import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        navbar: resolve(__dirname, "src/components/navbar.jsx"),
        footer: resolve(__dirname, "src/components/footer.jsx"),
        main: resolve(__dirname, "index.html"),
      },
      output: {
        entryFileNames: "[name].js", // navbar.js, footer.js, main.js
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
});
