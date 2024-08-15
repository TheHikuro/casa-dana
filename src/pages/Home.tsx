import { useTranslation } from 'react-i18next'
import { CASADANA_KEYS } from '../i18n/CASADANA_KEYS'
import { ACCEPTED_LANGUAGES } from '../utils/enum'
import i18next from 'i18next'

export default function Home() {
  const { t } = useTranslation()
  const handleChangeLanguage = (language: ACCEPTED_LANGUAGES) => {
    i18next.changeLanguage(language)
    localStorage.setItem('selectedLanguage', language)
  }
  return (
    <div className="flex flex-col">
      <span>{t(CASADANA_KEYS.test.test)}</span>
      {Object.values(ACCEPTED_LANGUAGES).map((language) => (
        <button
          key={language}
          onClick={() => handleChangeLanguage(language)}
          className="bg-blue-500 text-white p-2"
        >
          {language}
        </button>
      ))}
    </div>
  )
}
