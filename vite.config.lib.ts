import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: false,
      copyDtsFiles: true,
      cleanVueFileName: true
    })
  ],
  build: {
    outDir: resolve(__dirname, 'dist/lib'),
    minify: false,
    lib: {
      entry: resolve(__dirname, 'packages/components/index.ts'),
      formats: ['cjs'],
      fileName: (target): string => {
        return `index.${target}.js`
      }
    },
    rollupOptions: {
      external: ['vue'],
      preserveModules: true,
      output: {
        format: 'cjs',
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
