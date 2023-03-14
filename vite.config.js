import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    base: '/frontend-web/',
  },
  // base: import.meta.env.MODE === 'production' ? '/frontend-web/' : '/',
  optimizeDeps: {
    include: ['@vueuse/core'],
  },
})
