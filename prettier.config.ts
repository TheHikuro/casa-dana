import type { Config } from 'prettier'
import type { PluginOptions } from 'prettier-plugin-tailwindcss'

const config: Config & PluginOptions = {
  plugins: ['prettier-plugin-tailwindcss'],
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  arrowParens: 'always',
  semi: false,
  printWidth: 120,
  tabWidth: 2
}

config.exclude = ['src/i18n/locales/**/*.json']

export default config
