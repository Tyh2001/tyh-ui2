import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import { visualizer } from 'rollup-plugin-visualizer'
const { resolve } = require('path')
import hljs from 'highlight.js'
import mdIt from 'markdown-it'

export default defineConfig({
  base: './',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    visualizer(),
    Markdown({
      markdownItOptions: {
        html: false,
        // linkify: true, // unicode 支持
        typographer: true,
        breaks: true, // 换行
        highlight(str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return (
                '<pre class="hljs"><code>' +
                hljs.highlight(str, { language: lang, ignoreIllegals: true })
                  .value +
                '</code></pre>'
              )
            } catch (__) {}
          }

          return (
            '<pre class="hljs"><code>' +
            mdIt.utils.escapeHtml(str) +
            '</code></pre>'
          )
        } // 高亮
      },
      markdownItSetup(md) {
        // md.use(require('markdown-it-anchor')) // 头部
        md.use(require('markdown-it-prism')) // 代码高亮
      },
      wrapperClasses: 'tyh-markdown-body'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    host: '127.0.0.1',
    port: 2001
  }
})
