import { resolve } from 'path'
import { readdirSync } from 'fs'
import type { UserConfigExport } from 'vite'

const input = resolve(__dirname, 'packages/style/src')

export default (): UserConfigExport => {
  return {
    build: {
      assetsDir: 'theme',
      rollupOptions: {
        input: readdirSync(input).map((name) => {
          return `${input}/${name}`
        }),
        output: {
          entryFileNames: 'theme/[name].js',
          chunkFileNames: 'theme/[name].js',
          assetFileNames: 'theme/[name].[ext]'
        }
      }
    }
  }
}
