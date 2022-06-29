import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    minify: true,
    lib: {
      entry: resolve(__dirname, 'packages/style/index.scss'),
      formats: ['es'],
      name: 'style',
      fileName: 'style'
    },
    emptyOutDir: false,
    rollupOptions: {
      output: {
        dir: resolve(__dirname, 'dist/theme'),
        format: 'es'
      }
    }
  }
})
