import Logo from '../assets/logo/logo_header.png'
import { LangSelector } from './lang-selector.tsx'

export function Header() {
  return (
    <div className="sm:hidden h-14 grid grid-cols-3 items-center pl-3">
      <div className="col-span-1" />
      <div className="col-span-1 flex justify-center">
        <img src={Logo} alt="" className="w-10 h-10" />
      </div>
      <div className="flex justify-end space-x-2 pr-2">
        <LangSelector />
      </div>
    </div>
  )
}
