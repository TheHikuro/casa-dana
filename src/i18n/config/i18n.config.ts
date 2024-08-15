import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import ICU from 'i18next-icu'
import { ACCEPTED_LANGUAGES } from '../../utils/enum'

import fr from '../locales/fr/common.json'
import en from '../locales/en/common.json'
import es from '../locales/es/common.json'

export const handleChangeLanguage = (language: ACCEPTED_LANGUAGES) => {
  i18next.changeLanguage(language)
  localStorage.setItem('selectedLanguage', language)
}

const selectedLanguage =
  localStorage.getItem('selectedLanguage') || ACCEPTED_LANGUAGES.FR

i18next
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
      }
    },
    lng: selectedLanguage,
    fallbackLng: ACCEPTED_LANGUAGES.FR,
    interpolation: {
      escapeValue: false
    },
    keySeparator: false
  })
