module.exports = {
  env: {
    "browser": true,
    "es2021": true
  },
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
    module: 'readonly',
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential"
  ],
  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  plugins: [
    "vue"
  ],
  rules: {}
}
