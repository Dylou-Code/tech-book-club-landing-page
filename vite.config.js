import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/tech-book-club-landing-page', 
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});