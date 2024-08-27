import i18next from 'i18next'
import { ACCEPTED_LANGUAGES } from '../../utils/enum'
import { useCallback } from 'react'

export function useLang() {
  const handleChangeLanguage = useCallback((lang: ACCEPTED_LANGUAGES) => {
    i18next.changeLanguage(lang)
    i18next.reloadResources(lang)
    localStorage.setItem('selectedLanguage', lang)
  }, [])

  const currentLanguage = i18next.language

  return { handleChangeLanguage, currentLanguage }
}
