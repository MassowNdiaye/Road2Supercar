import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  base: "./",
  plugins: [react()],

  build: {
    rollupOptions: {
      input: {
        navbar: resolve(__dirname, "src/navbarLoader.jsx"),
        footer: resolve(__dirname, "src/footerLoader.jsx"),
      },
      output: {
        entryFileNames: "[name].js", // will output navbar.js and footer.js
        assetFileNames: "[name].[ext]", // will output navbar.css and footer.css
      },
    },
  },
});
