import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  plugins: [
    react(),
    Icons({
      autoInstall: true, // Automatically install missing icons
      compiler: "jsx",
      jsx: "react",
    }),
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // Utility-first CSS
        autoprefixer(), // Add vendor prefixes for cross-browser compatibility
      ],
    },
  },
  resolve: {
    alias: {
      "#src": path.resolve(__dirname, "./src"), // Simplify imports with alias
    },
  },
  build: {
    outDir: "dist", // Where the built files go
    sourcemap: true, // Enable sourcemaps for debugging
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Split React and ReactDOM into a separate chunk
        },
      },
    },
  },
});
