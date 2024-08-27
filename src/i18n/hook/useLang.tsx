import i18next from 'i18next'
import { ACCEPTED_LANGUAGES } from '../../utils/enum'
import { useCallback } from 'react'

export function useLang() {
  const currentLanguage = i18next.language

  const handleChangeLanguage = useCallback((lang: ACCEPTED_LANGUAGES) => {
    i18next.changeLanguage(lang)
    localStorage.setItem('selectedLanguage', lang)
    window.location.reload()
  }, [])

  return { handleChangeLanguage, currentLanguage }
}
