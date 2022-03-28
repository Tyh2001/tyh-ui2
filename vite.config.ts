import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: './',
  plugins: [vue()],
  build: {
    outDir: './packages/tyh-ui2/dist',
    lib: {
      entry: './packages/tyh-ui2/src/index.js',
      name: 'tyhUi'
    }
  }
})
