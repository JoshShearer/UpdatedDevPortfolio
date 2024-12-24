import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import Icons from 'unplugin-icons/vite';
import url from "url";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// https://vitejs.dev/config/
export default defineConfig({
  // optimizeDeps: {
  //   include: ['redux-persist', '@rematch/persist'],
  // },
  // build: {
  //   commonjsOptions: {
  //     include: [/redux-persist/, /@rematch/, /node_modules/],
  //   },
  // },
  plugins: [react(), Icons({ autoInstall: true, compiler: 'jsx', jsx: 'react'})],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  resolve: {
    alias: {
      "#src": path.resolve(__dirname, "./src"),
    },
  },
});
