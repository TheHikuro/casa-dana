import { useNavigate } from 'react-router-dom'
import Fresque from '../../assets/fresques/fresque.png'
import Logo from '../../assets/logo/logo_header.png'
import { Footer } from '../../components'
import { ContactCalendar, ContactForm } from './_components'

export default function ContactPage() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col h-dvh">
      <div className="w-full h-56 relative flex justify-center z-0">
        <img
          src={Fresque}
          alt={'casa_dana_fresque'}
          className="w-dvw absolute opacity-15 h-80"
        />
        <img
          src={Logo}
          alt="casa_dana_logo"
          className="w-36 h-36 absolute top-14 cursor-pointer"
          onClick={() => navigate('/')}
        />
      </div>
      <div className="h-full flex">
        <div className="w-1/2 flex justify-center items-center">
          <ContactForm />
        </div>
        <div className="w-1/2 flex justify-center items-center z-10">
          <ContactCalendar />
        </div>
      </div>
      <Footer />
    </div>
  )
}
