/// <reference types="vitest" />

import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  envDir: './env',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '~': resolve(__dirname, 'src'),
    },
  },
  plugins: [Vue()],
  test: {
    globals: true,
    environment: 'happy-dom',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "sass:math";@import "~/assets/css/_includes";`,
      },
    },
  },
})
