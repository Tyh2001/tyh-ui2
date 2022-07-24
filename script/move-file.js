const { copyFileSync, mkdirSync } = require('fs')

mkdirSync('./dist/font')

const FILE = [
  {
    input: './packages/style/font/tyh-icon.ttf',
    outDir: 'dist/font/tyh-icon.ttf'
  },
  {
    input: './packages/style/font/tyh-icon.woff',
    outDir: 'dist/font/tyh-icon.woff'
  },
  {
    input: './packages/style/font/tyh-icon.woff2',
    outDir: 'dist/font/tyh-icon.woff2'
  },
  { input: './README.md', outDir: 'dist/README.md' },
  { input: './packages/tyh-ui2/package.json', outDir: 'dist/package.json' },
  { input: './LICENSE', outDir: 'dist/LICENSE' }
]

FILE.forEach((item) => {
  copyFileSync(item.input, item.outDir)
})
