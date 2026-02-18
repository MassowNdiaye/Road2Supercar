export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        navbar: resolve(__dirname, "src/components/Navbar.jsx"),
        footer: resolve(__dirname, "src/components/Footer.jsx"),
        main: resolve(__dirname, "index.html"),
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
});
