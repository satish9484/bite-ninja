import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Import the main index file which forwards all SCSS partials
        additionalData: `@use "./src/scss/_index.scss" as *;`,
        logger: {
          warn: () => {},
        },
        // Enable source maps for better debugging
        sourceMap: true,
      },
    },
    // Enable CSS modules if needed
    modules: {
      localsConvention: "camelCase",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./components"),
      "@scss": path.resolve(__dirname, "./scss"),
      "@styles": path.resolve(__dirname, "./scss"),
    },
  },
  // Ensure SCSS files are watched and processed
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  // Build configuration for production
  build: {
    cssCodeSplit: false, // Bundle all CSS into a single file
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          styles: ["./scss/main.scss"],
        },
      },
    },
  },
});
