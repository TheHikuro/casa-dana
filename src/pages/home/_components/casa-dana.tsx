import { t } from 'i18next'
import { IoBedOutline } from 'react-icons/io5'
import { LuBedSingle, LuSofa } from 'react-icons/lu'
import { CarouselImg } from '../../../components'
import { CASADANA_KEYS } from '../../../i18n/keys/CASADANA_KEYS'
import {
  Salon1,
  Salon2,
  Salon3,
  Salon4,
  Salon5,
  Salon6,
  Bathroom1,
  Bathroom2,
  Bedroom1_1,
  Bedroom2_1,
  Bedroom2_2,
  Jacuzzi,
  Kitchen1,
  Kitchen2,
  Solarium1,
  Solarium2,
  Solarium3,
  Solarium4,
  FrontPorch,
  BackgroundCover
} from '../../../assets/photos'
import {
  Fragment,
  useState,
  useEffect,
  useCallback,
  PropsWithChildren
} from 'react'
import { Checklist } from './checklist'
import Logo from '../../../assets/logo/logo_header.png'
import { Listing as Equipments } from './listing'
import { GalleryLayout } from '../../../components/gallery-layout'

export function CasaDana() {
  const img = [
    Salon1,
    Salon2,
    Salon3,
    Salon4,
    Salon5,
    Salon6,
    Bathroom1,
    Bathroom2,
    Bedroom1_1,
    Bedroom2_1,
    Bedroom2_2,
    Kitchen1,
    Kitchen2,
    Solarium1,
    Solarium2,
    Solarium3,
    Solarium4,
    Jacuzzi,
    FrontPorch
  ]

  const img_desktop = [
    FrontPorch,
    Salon3,
    Solarium3,
    Solarium1,
    Bedroom1_1,
    Bedroom2_1,
    Jacuzzi,
    Salon4
  ]

  const [windowSize, setWindowSize] = useState(window.innerWidth)

  const handleResize = useCallback(() => setWindowSize(window.innerWidth), [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  return (
    <Fragment>
      {windowSize < 640 && (
        <div className={'h-48'}>
          <CarouselImg img={img} />
        </div>
      )}
      <div className="pt-5 space-y-5 h-full relative sm:h-[80dvh] sm:w-dvw sm:-ml-7 sm:pl-5 sm:justify-center sm:flex sm:items-center">
        <img
          className={
            'sm:absolute sm:inset-0 sm:bg-no-repeat sm:bg-cover sm:bg-center sm:opacity-75 hidden sm:block'
          }
          alt={'background-casa-dana'}
          src={BackgroundCover}
        />
        <img
          src={Logo}
          className="absolute top-10 hidden sm:block sm:aspect-square lg:h-32 lg:w-32 sm:h-20 sm:w-20"
          alt="logo"
        />
        <div className="relative sm:w-2/3 sm:space-y-5">
          <div className="relative">
            <span className="font-medium text-xl sm:text-4xl">
              {t(CASADANA_KEYS.casa_dana.full_name)}
            </span>
          </div>
          <div className="space-y-5 sm:space-y-0 sm:flex-col-reverse sm:flex relative sm:justify-center sm:w-2/3">
            <div className="flex justify-around text-center space-x-2 mt-5 sm:justify-start">
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
      <div className="mt-5">
        <Equipments />
      </div>
      {windowSize >= 640 && (
        <div className="flex w-full justify-center items-center flex-col h-fit mt-10">
          <h2 className="font-medium text-xl mr-auto">Casa Dana</h2>
          <GalleryLayout img={img_desktop} />
        </div>
      )}
    </Fragment>
  )
}

function Listing({ name, children }: PropsWithChildren<{ name: string }>) {
  return (
    <div className="text-xs flex flex-col justify-center items-center space-y-1 border shadow-inner p-1 rounded-md w-full max-w-44 sm:border-none">
      <span>{t(name)}</span>
      {children}
    </div>
  )
}
