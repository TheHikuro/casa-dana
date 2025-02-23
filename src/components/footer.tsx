import Logo from '../assets/logo/logo_footer.png'
import { AtSign, Facebook, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-900 px-5">
      <div className="max-w-dvw mx-auto h-36 flex flex-row items-center justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img
            src={Logo}
            alt="casa dana"
            className="w-20 h-16 md:w-auto md:h-auto"
          />
        </div>
        {/* Social Links Section */}
        <div className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-10">
          <a
            href="https://www.facebook.com/groups/607622748355117"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <Facebook className="w-5 h-5 hover:text-blue-400 md:w-10 md:h-10" />
            <span className="block md:hidden">Facebook</span>
          </a>
          <div
            onClick={() =>
              window.open(
                'https://www.instagram.com/casa_dana_los_alcazares?igsh=MWJweXp5bDU2Z2xybg=='
              )
            }
            className="flex items-center space-x-2 cursor-pointer"
          >
            <Instagram className="w-5 h-5 hover:text-orange-400 hover:to-red-600 md:w-10 md:h-10" />
            <span className="block md:hidden">Instagram</span>
          </div>
          <div
            onClick={() => window.open('mailto:casadana.contact@gmail.com')}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <AtSign className="w-5 h-5 hover:text-orange-400 hover:to-red-600 md:w-10 md:h-10" />
            <span className="block md:hidden">casadana.contact</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
