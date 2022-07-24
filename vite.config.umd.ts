import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: resolve(__dirname, 'dist/dist'),
    lib: {
      entry: resolve(__dirname, 'packages/tyh-ui2/index.d.ts'),
      name: 'tyhUi2',
      formats: ['umd'],
      fileName: () => {
        return 'index.js'
      }
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        format: 'umd',
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
