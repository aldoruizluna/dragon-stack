import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  appType: 'mpa',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.htm'),
        landing: resolve(__dirname, 'landing.html')
      },
    },
  },
  server: {
    open: '/',
    host: true,
  },
});
