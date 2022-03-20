import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
const { resolve } = require('path')

export default defineConfig({
  base: './',
  plugins: [vue(), visualizer()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    host: '127.0.0.1',
    port: '2001'
  }
})
