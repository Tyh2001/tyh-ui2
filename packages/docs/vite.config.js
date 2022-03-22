import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  plugins: [vue(), visualizer()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  server: {
    host: '127.0.0.1',
    port: '2001'
  }
})
