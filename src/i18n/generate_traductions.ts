import * as fs from 'fs'
import * as path from 'path'

/**
 * @description
 * This script reads the localization keys and values from a JSON file and generates a TypeScript file with the keys.
 */
interface I18nKeys {
  [key: string]: string | I18nKeys
}

/**
 * @description
 * Read the localization keys from a JSON file.
 * @param filePath
 * @returns
 */
const readLocaleKeys = (filePath: string): I18nKeys => {
  const content: string = fs.readFileSync(filePath, 'utf-8')
  const json: I18nKeys = JSON.parse(content)
  return transformToKeys(json)
}

/**
 * @description
 * Transform the localization object into a flat object with keys.
 * @param obj
 * @param parentKey
 * @returns
 */
function transformToKeys(obj: any, parentKey = ''): I18nKeys {
  return Object.keys(obj).reduce((acc, key) => {
    const propName = `${parentKey}${parentKey ? '.' : ''}${key}`
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      acc[key] = transformToKeys(obj[key], propName)
    } else {
      acc[key] = propName
    }
    return acc
  }, {} as I18nKeys)
}

/**
 * @description
 * Generate the TypeScript file with the i18n keys.
 * @param keys
 * @param outputPath
 */
const generateTypescriptFile = (keys: I18nKeys, outputPath: string): void => {
  let content: string = 'export const CASADANA_KEYS = '
  content += JSON.stringify(keys, null, 2).replace(/"([^"]+)":/g, '$1:') // Remove quotes from property names
  fs.writeFileSync(outputPath, content, 'utf-8')
  console.log(`Generated TypeScript file with i18n keys at: ${outputPath}`)
}

/**
 * @description
 * Path to the localization file.
 */
const localeFilePath: string = path.join(__dirname, './locales/fr/common.json')

/**
 * @description
 * Path to the output file.
 */
const outputPath: string = path.join(__dirname, './CASADANA_KEYS.ts')

/**
 * @description
 * Read the localization keys and generate the TypeScript file.
 */
const localeKeys: I18nKeys = readLocaleKeys(localeFilePath)
generateTypescriptFile(localeKeys, outputPath)
