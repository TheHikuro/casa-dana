import { ACCEPTED_LANGUAGES } from '../utils/enum'
import { useLang } from '../i18n/hook/useLang'
import Logo from '../assets/logo/logo_header.png'

export function Header() {
  const { handleChangeLanguage } = useLang()
  return (
    <div className="sm:hidden h-14 grid grid-cols-3 items-center pl-3">
      <div className="col-span-1" />
      <div className="col-span-1 flex justify-center">
        <img src={Logo} alt="" className="w-10 h-10" />
      </div>
      <div className="flex justify-end space-x-2 pr-2">
        {Object.values(ACCEPTED_LANGUAGES).map((lang, index) => (
          <div
            className="col-span-1 w-auto items-center"
            onClick={() => handleChangeLanguage(lang)}
            key={index}
          >
            <span className="text-xs uppercase">{lang}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
