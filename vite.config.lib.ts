import type { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'

export default (): UserConfigExport => {
  return {
    plugins: [
      vueSetupExtend(),
      vue(),
      dts({
        insertTypesEntry: false,
        copyDtsFiles: true,
        cleanVueFileName: true
      })
    ],
    mode: 'production',
    build: {
      target: 'modules',
      minify: true,
      chunkSizeWarningLimit: 2,
      reportCompressedSize: false,
      emptyOutDir: false,
      outDir: resolve(__dirname, 'dist/lib'),
      lib: {
        entry: resolve(__dirname, 'packages/components/index.ts'),
        formats: ['cjs'],
        fileName: (target): string => {
          return `index.${target}.js`
        }
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          preserveModules: true,
        }
      }
    }
  }
}
