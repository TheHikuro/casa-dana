import { CiMail } from 'react-icons/ci'
import { CASADANA_KEYS } from '../i18n/keys/CASADANA_KEYS'
import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="flex justify-center items-center bg-gray-200 h-36 w-dvw text-gray-900 px-14">
      <div className="w-full text-center flex flex-col justify-center items-center">
        <span>{t(CASADANA_KEYS.footer.description)}</span>
        <CiMail className="w-9 h-9 drop-shadow-md" />
      </div>
    </footer>
  )
}
