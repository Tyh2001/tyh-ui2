import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { resolve } from 'path'
// import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  base: './',
  plugins: [vue(), visualizer()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  // 生产环境取消 console
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
    // rollupOptions: {
    //   output: {
    //     chunkFileNames: 'js/[name]-[hash].js',
    //     entryFileNames: 'js/[name]-[hash].js',
    //     assetFileNames: '[ext]/[name]-[hash].[ext]'
    //   }
    // }
  },
  server: {
    host: '127.0.0.1',
    port: '2001'
  }
})
