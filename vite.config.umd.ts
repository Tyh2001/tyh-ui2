import type { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'

export default (): UserConfigExport => {
  return {
    plugins: [vue(), vueSetupExtend()],
    build: {
      emptyOutDir: false,
      outDir: resolve(__dirname, 'dist/dist'),
      lib: {
        entry: resolve(__dirname, 'packages/components/index.ts'),
        name: 'tyhUi2',
        formats: ['umd'],
        fileName: (target): string => {
          return `index.${target}.js`
        }
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          format: 'umd',
          exports: 'named',
          globals: {
            vue: 'Vue'
          }
        }
      }
    }
  }
}
