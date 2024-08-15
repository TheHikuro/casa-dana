import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { ACCEPTED_LANGUAGES } from './utils/enum'
import ICU from 'i18next-icu'

import fr from './i18n/locales/fr/common.json'
import en from './i18n/locales/en/common.json'
import es from './i18n/locales/es/common.json'
import nl from './i18n/locales/nl/common.json'

const createI18nInstance = (locale: ACCEPTED_LANGUAGES) => {
  const i18nInstance = i18next.createInstance()
  i18nInstance
    .use(initReactI18next)
    .use(ICU)
    .init({
      compatibilityJSON: 'v3',
      resources: {
        [ACCEPTED_LANGUAGES.FR]: {
          translation: fr
        },
        [ACCEPTED_LANGUAGES.EN]: {
          translation: en
        },
        [ACCEPTED_LANGUAGES.ES]: {
          translation: es
        },
        [ACCEPTED_LANGUAGES.NL]: {
          translation: nl
        }
      },
      lng: locale,
      fallbackLng: ACCEPTED_LANGUAGES.FR,
      interpolation: {
        escapeValue: false
      },
      keySeparator: false
    })

  return i18nInstance
}

export default async function i18nTranslation(locale: ACCEPTED_LANGUAGES) {
  const i18nInstance = createI18nInstance(locale)

  return {
    i18n: i18nInstance,
    t: i18nInstance.t.bind(i18nInstance),
    resources: i18nInstance.services.resourceStore.data
  }
}
