import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { enhancedImages } from '@sveltejs/enhanced-img';
// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(),enhancedImages()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          uikit: ['uikit'],
          vendor: ['jquery', 'animate.css'],
        },
      },
    },
  },
})
