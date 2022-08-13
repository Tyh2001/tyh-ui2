import { defineConfig } from 'vite'
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
        insertTypesEntry: false,
        copyDtsFiles: true,
        cleanVueFileName: true
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
        fileName: (target): string => {
          return `index.${target}.mjs`
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
