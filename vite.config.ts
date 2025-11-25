import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const isStorybookProcess = process.env.npm_lifecycle_event === 'storybook'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), !isStorybookProcess && vueDevTools()].filter(Boolean),
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/foundations/functions" as *;
          @use "@/assets/foundations/variables" as *;
          @use "@/assets/foundations/mixins" as *;
        `,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
