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
      insertTypesEntry: true,
      copyDtsFiles: true,
      cleanVueFileName: true
    })
  ],
  build: {
    outDir: resolve(__dirname, 'dist/es'),
    lib: {
      entry: resolve(__dirname, 'packages/tyh-ui2/index.d.ts'),
      name: 'tyhUi2',
      formats: ['es'],
      fileName: () => {
        return 'index.js'
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
