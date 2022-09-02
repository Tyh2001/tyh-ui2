import type { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default (): UserConfigExport => {
  return {
    plugins: [
      vueSetupExtend(),
      vue(),
      dts({
        insertTypesEntry: true,
        cleanVueFileName: true,
        copyDtsFiles: true,
        include: ['./packages/components']
      })
    ],
    mode: 'production',
    build: {
      target: 'modules',
      minify: true, // 压缩
      chunkSizeWarningLimit: 2, // 超过 2kb 警告提示
      reportCompressedSize: false,
      emptyOutDir: false,
      outDir: resolve(__dirname, 'dist/es'),
      lib: {
        entry: resolve(__dirname, 'packages/components/index.ts'),
        formats: ['es'],
        fileName: (): string => {
          return 'index.mjs'
        }
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          preserveModules: true
        }
      }
    }
  }
}
