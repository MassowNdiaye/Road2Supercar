import { defineConfig } from "vite"; // ✅ must be here
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  base: "/", // ensures correct paths in production
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        navbar: resolve(__dirname, "src/components/Navbar.jsx"),
        footer: resolve(__dirname, "src/components/Footer.jsx"),
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
});
