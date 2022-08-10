import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vueSetupExtend(),
    vue(),
    dts({
      insertTypesEntry: false,
      copyDtsFiles: true,
      cleanVueFileName: true
    })
  ],
  build: {
    outDir: resolve(__dirname, 'dist/es'),
    lib: {
      entry: resolve(__dirname, 'packages/components/index.ts'),
      name: 'tyhUi2',
      formats: ['es'],
      fileName: (target): string => {
        return `index.${target}.mjs`
      }
    },
    rollupOptions: {
      external: ['vue'],
      preserveModules: true,
      output: {
        format: 'es',
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
