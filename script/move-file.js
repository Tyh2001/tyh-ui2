const { copyFileSync, mkdirSync } = require('fs')

const FILE = [
  { input: './README.md', outDir: 'dist/README.md' },
  { input: './packages/tyh-ui2/package.json', outDir: 'dist/package.json' },
  { input: './LICENSE', outDir: 'dist/LICENSE' }
]

FILE.forEach((item) => {
  copyFileSync(item.input, item.outDir)
})
