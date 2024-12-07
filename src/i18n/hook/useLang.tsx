import i18next from 'i18next'
import { ACCEPTED_LANGUAGES } from '../../utils/enum'
import { useCallback } from 'react'

export function useLang() {
  const currentLanguage =
    i18next.language ??
    localStorage.getItem('selectedLanguage') ??
    ACCEPTED_LANGUAGES.FR

  const handleChangeLanguage = useCallback((lang: ACCEPTED_LANGUAGES) => {
    i18next.changeLanguage(lang).then(() => {
      localStorage.setItem('selectedLanguage', lang)
      window.location.reload()
    })
  }, [])

  return { handleChangeLanguage, currentLanguage }
}
