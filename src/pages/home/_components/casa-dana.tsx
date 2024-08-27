import { t } from 'i18next'
import { IoBedOutline } from 'react-icons/io5'
import { LuBedSingle, LuSofa } from 'react-icons/lu'
import { CarouselImg } from '../../../components'
import { CASADANA_KEYS } from '../../../i18n/keys/CASADANA_KEYS'
import Salon from '../../../assets/photos/photo_1.png'
import Terrasse from '../../../assets/photos/photo_2.png'
import Chambre from '../../../assets/photos/photo_3.png'
import Chambre_2 from '../../../assets/photos/photo_4.png'
import Salon_2 from '../../../assets/photos/photo_5.png'
import Terrasse_2 from '../../../assets/photos/photo_6.png'
import {
  Fragment,
  useState,
  useEffect,
  useCallback,
  PropsWithChildren
} from 'react'
import { Checklist } from './checklist'
import Logo from '../../../assets/logo/logo_header.png'

export function CasaDana() {
  const img = [Salon, Terrasse, Chambre, Chambre_2, Salon_2, Terrasse_2]

  const [windowSize, setWindowSize] = useState(window.innerWidth)

  const handleResize = useCallback(() => {
    setWindowSize(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return (
    <Fragment>
      {windowSize < 640 ? (
        <CarouselImg
          img={img.map((img, index) => ({
            src: img,
            alt: `${index + 1}`
          }))}
        />
      ) : null}
      <div className="pt-5 space-y-5 h-full relative sm:h-[80dvh] sm:w-dvw sm:-ml-7 sm:pl-5 sm:justify-center sm:flex sm:items-center">
        <div className="sm:absolute sm:inset-0 sm:bg-[url('src/assets/photos/first_photo.png')] sm:bg-no-repeat sm:bg-cover sm:bg-center sm:opacity-75 hidden sm:block" />
        <img
          src={Logo}
          className="absolute top-10 hidden sm:block sm:aspect-square sm:h-32 sm:w-32"
        />
        <div className="relative sm:w-2/3 sm:space-y-5">
          <div className="relative">
            <span className="font-medium text-xl sm:text-4xl">
              {t(CASADANA_KEYS.casa_dana.full_name)}
            </span>
          </div>
          <div className="space-y-5 sm:space-y-0 sm:flex-col-reverse sm:flex relative sm:justify-center sm:w-2/3">
            <div className="flex justify-between text-center space-x-2 sm:mt-5 sm:justify-start">
              <Listing name={CASADANA_KEYS.casa_dana.listing.bedroom.first}>
                <IoBedOutline className="w-7 h-7 sm:w-12 sm:h-12" />
              </Listing>
              <Listing name={CASADANA_KEYS.casa_dana.listing.bedroom.second}>
                <div className="flex justify-center items-center">
                  <LuBedSingle className="w-7 h-7 sm:w-12 sm:h-12" />
                  <LuBedSingle className="w-7 h-7 sm:w-12 sm:h-12" />
                </div>
              </Listing>
              <Listing name={CASADANA_KEYS.casa_dana.listing.living_room}>
                <LuSofa className="w-7 h-7 sm:w-12 sm:h-12" />
              </Listing>
            </div>
            <div className="w-full sm:w-2/3">
              <span className="text-justify w-full flex sm:text-lg sm:mx-auto">
                {t(CASADANA_KEYS.casa_dana.description)}
              </span>
            </div>
          </div>
        </div>
        <div className="relative sm:w-1/3">
          <Checklist />
        </div>
      </div>
    </Fragment>
  )
}

function Listing({ name, children }: PropsWithChildren<{ name: string }>) {
  return (
    <div className="text-xs flex flex-col justify-center items-center space-y-1 border shadow-inner py-1 rounded-md sm:w-52 sm:border-none">
      <span>{t(name)}</span>
      {children}
    </div>
  )
}
