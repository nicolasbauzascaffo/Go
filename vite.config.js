import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
      },
      output: {
        dir: "dist",
        entryFileNames: "[name].[hash].js",
        chunkFileNames: "[name].[hash].js",
        assetFileNames: "[name].[hash][extname]",
      },
      manualChunks(id) {
        if (id.includes("node_modules")) {
          return "vendor";
        } else {
          return "app";
        }
      },
      preserveEntrySignatures: "allow-extension",
      treeshake: true,
    },
  },
});
