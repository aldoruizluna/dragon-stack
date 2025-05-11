import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  appType: 'mpa', // Multi-Page Application mode
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.htm'),
      },
    },
  },
  server: {
    open: '/index.htm',
    host: true,
  },
});
