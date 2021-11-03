import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import viteSvgIcons from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8888,
  },
  envDir: './env',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '~': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    // https://github.com/anncwb/vite-plugin-svg-icons
    viteSvgIcons({
      iconDirs: [resolve(process.cwd(), 'src/assets/icon')],
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "sass:math";@import "~/assets/css/_includes";`,
      },
    },
  },
})
