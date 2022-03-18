module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
    module: 'readonly'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/prettier',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {}
}
