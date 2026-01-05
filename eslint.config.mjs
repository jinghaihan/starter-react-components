import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  formatters: {
    html: true,
    css: true,
  },
  rules: {
    'pnpm/yaml-enforce-settings': 'off',
  },
})
