import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { ACCEPTED_LANGUAGES } from '../../utils/enum'

// Type Definitions
interface I18nKeys {
  [key: string]: string | I18nKeys
}

// Get the current directory in ES module context
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const __keys_name = 'CASADANA_KEYS'

// Paths to the localization files
const languages = [
  ACCEPTED_LANGUAGES.FR,
  ACCEPTED_LANGUAGES.EN,
  ACCEPTED_LANGUAGES.ES
]
const localeFilePaths = languages.reduce<Record<string, string>>(
  (acc, lang) => {
    acc[lang] = join(__dirname, `../locales/${lang}/common.json`)
    return acc
  },
  {}
)
const outputPath = join(__dirname, `../keys/${__keys_name}.ts`)

// Read and parse a JSON file
function readJsonFile(filePath: string): I18nKeys {
  if (!existsSync(filePath)) {
    console.error(`File does not exist: ${filePath}`)
    process.exit(1)
  }

  const content = readFileSync(filePath, 'utf-8').trim()

  if (content === '') {
    console.error(`File is empty: ${filePath}`)
    process.exit(1)
  }

  try {
    return JSON.parse(content)
  } catch (error) {
    console.error(`Error parsing JSON in file: ${filePath}`)
    console.error(error)
    process.exit(1)
  }
}

// Generate the TypeScript keys file
function generateKeysFile(keys: I18nKeys, outputPath: string): void {
  const content = `export const ${__keys_name} = ${JSON.stringify(keys, null, 2).replace(/"([^"]+)":/g, '$1:')};`
  mkdirSync(dirname(outputPath), { recursive: true })
  writeFileSync(outputPath, content, 'utf-8')
}

// Remove keys from other locales that are missing in the 'fr' locale
function removeMissingKeysFromOtherLocales(
  allLangKeys: Record<string, I18nKeys>
): void {
  let isUpdated = false

  function recurseCheckAndRemove(
    referenceObj: I18nKeys,
    targetObj: I18nKeys
  ): void {
    Object.keys(targetObj).forEach((key) => {
      if (!referenceObj[key]) {
        delete targetObj[key]
        isUpdated = true
      } else if (
        typeof targetObj[key] === 'object' &&
        !Array.isArray(targetObj[key]) &&
        targetObj[key] !== null
      ) {
        recurseCheckAndRemove(
          referenceObj[key] as I18nKeys,
          targetObj[key] as I18nKeys
        )

        // If the nested object becomes empty after removal, delete the key
        if (Object.keys(targetObj[key] as I18nKeys).length === 0) {
          delete targetObj[key]
          isUpdated = true
        }
      }
    })
  }

  // Use 'fr' as the reference language to clean up other locales
  const referenceLang = 'fr'
  languages.forEach((lang) => {
    if (lang !== referenceLang) {
      recurseCheckAndRemove(allLangKeys[referenceLang], allLangKeys[lang])
      if (isUpdated) {
        writeFileSync(
          localeFilePaths[lang],
          JSON.stringify(allLangKeys[lang], null, 2),
          'utf-8'
        )
        console.log(
          `${lang.toUpperCase()} JSON updated by removing keys missing in 'fr'.`
        )
      }
    }
  })
}

// Update all language JSON files with missing keys
function updateMissingKeys(allLangKeys: Record<string, I18nKeys>): void {
  languages.forEach((lang) => {
    let isUpdated = false

    function recurseCheckAndUpdate(
      referenceObj: I18nKeys,
      targetObj: I18nKeys
    ): void {
      Object.keys(referenceObj).forEach((key) => {
        if (!targetObj[key]) {
          targetObj[key] = `${referenceObj[key] as string}!Missing!`
          isUpdated = true
        } else if (
          typeof referenceObj[key] === 'object' &&
          !Array.isArray(referenceObj[key]) &&
          referenceObj[key] !== null
        ) {
          if (
            !targetObj[key] ||
            typeof targetObj[key] !== 'object' ||
            Array.isArray(targetObj[key])
          ) {
            targetObj[key] = {}
          }
          recurseCheckAndUpdate(
            referenceObj[key] as I18nKeys,
            targetObj[key] as I18nKeys
          )
        }
      })
    }

    // Use the first language as the reference for missing keys
    const referenceLang = languages[0] // In this case, 'fr'
    if (lang !== referenceLang) {
      recurseCheckAndUpdate(allLangKeys[referenceLang], allLangKeys[lang])
      if (isUpdated) {
        writeFileSync(
          localeFilePaths[lang],
          JSON.stringify(allLangKeys[lang], null, 2),
          'utf-8'
        )
        console.log(`${lang.toUpperCase()} JSON updated with missing keys.`)
      }
    }
  })
}

function main(): void {
  const allLangKeys: Record<string, I18nKeys> = {}

  // Read all language files
  languages.forEach((lang) => {
    allLangKeys[lang] = readJsonFile(localeFilePaths[lang])
  })

  // Remove missing keys from other locales based on 'fr' locale
  removeMissingKeysFromOtherLocales(allLangKeys)

  // Identify and update missing keys in all languages
  updateMissingKeys(allLangKeys)

  // Generate TypeScript file with keys from the reference language (e.g., 'fr')
  const referenceLang = languages[0] // In this case, 'fr'
  const nestedKeys = transformToNestedKeys(allLangKeys[referenceLang])
  generateKeysFile(nestedKeys, outputPath)
  console.log(`Generated TypeScript file with i18n keys at: ${outputPath} ✅`)
}

// Transform the object into a flat object with keys
function transformToNestedKeys(obj: I18nKeys): I18nKeys {
  const result: I18nKeys = {}

  Object.keys(obj).forEach((fullKey) => {
    const parts = fullKey.split('.')
    let current: I18nKeys | string = result

    parts.forEach((part, index) => {
      const isLastPart = index === parts.length - 1

      if (isLastPart) {
        ;(current as I18nKeys)[part] = fullKey
      } else {
        if (typeof (current as I18nKeys)[part] === 'string') {
          ;(current as I18nKeys)[part] = { _value: (current as I18nKeys)[part] }
        }

        if (
          !(current as I18nKeys)[part] ||
          typeof (current as I18nKeys)[part] !== 'object'
        ) {
          ;(current as I18nKeys)[part] = {}
        }

        current = (current as I18nKeys)[part]
      }
    })
  })

  return result
}

main()
