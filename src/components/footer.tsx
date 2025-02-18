import { CiMail } from 'react-icons/ci'
import { CASADANA_KEYS } from '../i18n/keys/CASADANA_KEYS'
import { useTranslation } from 'react-i18next'
import Logo from '../assets/logo/logo_footer.png'
import { Facebook, Instagram } from 'lucide-react'

export function FooterMobile() {
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

export function Footer() {
  return (
    <footer className="flex bg-gray-200 h-36 w-dvw text-gray-900 px-14">
      <div className={'w-1/2 flex items-center'}>
        <img src={Logo} alt={'casa dana'} />
      </div>
      <div
        className={'flex justify-start items-end flex-col space-y-5 ml-auto'}
      >
        <div className={'flex space-x-5 items-center my-auto'}>
          <Facebook
            className={'w-10 h-10 cursor-pointer hover:text-blue-400'}
            onClick={() =>
              window.open('https://www.facebook.com/groups/607622748355117')
            }
          />
          <Instagram
            className={
              'w-10 h-10 cursor-pointer hover:text-orange-400 hover:to-red-600'
            }
            onClick={() =>
              window.open(
                'https://www.instagram.com/casa_dana_los_alcazares?igsh=MWJweXp5bDU2Z2xybg=='
              )
            }
          />
        </div>
      </div>
    </footer>
  )
}
