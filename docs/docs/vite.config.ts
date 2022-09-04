import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    server: {
      port: 1216
    },
    optimizeDeps: {
      exclude: ['vitepress']
    },
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              }
            }
          }
        ]
      }
    }
  }
}
