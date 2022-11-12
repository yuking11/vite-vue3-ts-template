/// <reference types="vitest" />

import { defineConfig } from 'vite'
import { resolve } from 'path'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

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
    Vue(),
    Pages(),
    Layouts(),
    // https://github.com/anncwb/vite-plugin-svg-icons
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [resolve(__dirname, 'src/assets/icon')],
      // Specify symbolId format
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
  test: {
    globals: true,
    environment: 'happy-dom',
  },
})
