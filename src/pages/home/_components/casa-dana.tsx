import { t } from 'i18next'
import { IoBedOutline } from 'react-icons/io5'
import { LuBedSingle, LuSofa } from 'react-icons/lu'
import { CarouselImg, LangSelector } from '../../../components'
import { CASADANA_KEYS } from '../../../i18n/keys/CASADANA_KEYS'
import { BackgroundCover } from '../../../assets/photos'
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
import { cn } from '../../../../@/lib/utils.ts'
import { img } from '../../../utils/images.ts'
import certifImg from '../../../assets/logo/certif.png'
import ContactPage from '../../contact/ContactPage.tsx'

export function CasaDana() {
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
      <div className="pt-5 space-y-5 h-full relative sm:h-[60dvh] sm:w-dvw sm:-ml-7 sm:pl-5 sm:justify-center sm:flex sm:items-center">
        <img
          className="absolute hidden sm:block inset-0 size-full object-cover object-bottom opacity-75"
          alt={'background-casa-dana'}
          src={BackgroundCover}
        />
        <div
          className={cn(
            'sm:absolute sm:top-5 sm:right-5 sm:z-10 sm:space-x-2',
            windowSize < 640 ? 'hidden' : 'flex'
          )}
        >
          <div className={'space-y-2 mr-auto sm:mr-4'}>
            <div className="flex justify-end">
              <LangSelector />
            </div>
          </div>
        </div>
        <img
          src={Logo}
          className="absolute top-10 hidden sm:block sm:aspect-square lg:h-32 lg:w-32 sm:h-20 sm:w-20"
          alt="logo"
        />
        <div className="flex justify-evenly flex-col sm:flex-row relative">
          <div className="relative sm:space-y-5 flex justify-center flex-col items-center sm:mt-20">
            <div className="relative">
              <img
                alt="cerificat casa dana"
                src={certifImg}
                className="absolute hidden sm:block -left-10 lg:-left-24 -top-40"
              />
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
              <div className="w-full ">
                <span className="text-justify w-full flex sm:text-lg sm:mx-auto">
                  {t(CASADANA_KEYS.casa_dana.description)}
                </span>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center w-full sm:mt-20">
            <Checklist />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Equipments />
      </div>
      <div className="mt-5 lg:mt-10">
        <ContactPage />
      </div>
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
