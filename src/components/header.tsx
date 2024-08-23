import { RxHamburgerMenu } from 'react-icons/rx'
import { ACCEPTED_LANGUAGES } from '../utils/enum'
import { useLang } from '../i18n/hook/useLang'

export function Header() {
  const { handleChangeLanguage } = useLang()
  return (
    <div className="sm:hidden h-10 flex items-center pl-3 justify-between">
      <div>
        <RxHamburgerMenu className="w-7 h-7" />
      </div>
      <div className="flex justify-end space-x-2">
        {Object.values(ACCEPTED_LANGUAGES).map((lang, index) => (
          <div
            className="flex flex-col w-auto items-center"
            onClick={() => handleChangeLanguage(lang)}
          >
            <span key={index} className="text-xs">
              {lang}
            </span>
            <span>{['🇫🇷', '🇬🇧', '🇪🇸'][index]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
