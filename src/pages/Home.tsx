import { useTranslation } from 'react-i18next'
import { CarouselImg } from '../components'
import Salon from '../assets/photos/photo_1.png'
import Terrasse from '../assets/photos/photo_2.png'
import Chambre from '../assets/photos/photo_3.png'
import Chambre_2 from '../assets/photos/photo_4.png'
import Salon_2 from '../assets/photos/photo_5.png'
import Terrasse_2 from '../assets/photos/photo_6.png'
import { CASADANA_KEYS } from '../i18n/keys/CASADANA_KEYS'
import { IoBedOutline } from 'react-icons/io5'
import { LuBedSingle, LuSofa } from 'react-icons/lu'

export default function Home() {
  const { t } = useTranslation()
  const img = [Salon, Terrasse, Chambre, Chambre_2, Salon_2, Terrasse_2]
  return (
    <div className={`bg-cover flex flex-col overflow-y-scroll h-dvh`}>
      <CarouselImg
        img={img.map((img, index) => ({
          src: img,
          alt: `image ${index + 1}`
        }))}
      />
      <div className="pl-5 pt-5 space-y-5 h-full">
        <div>
          <span className="font-medium text-xl">
            {t(CASADANA_KEYS.full_name)}
          </span>
        </div>
        <div className="flex justify-between text-center pr-5 space-x-2">
          <div className="text-xs flex flex-col justify-center items-center space-y-1 border shadow-inner py-1 rounded-md">
            <span>Chambre 1</span>
            <IoBedOutline className="w-7 h-7" />
          </div>
          <div className="text-xs flex flex-col justify-center items-center space-y-1 border shadow-inner py-1 rounded-md">
            <span>Chambre 2</span>
            <div className="flex space-x-2 justify-center">
              <LuBedSingle className="w-7 h-7" />
              <LuBedSingle className="w-7 h-7" />
            </div>
          </div>
          <div className="text-xs flex flex-col justify-center items-center space-y-1 border shadow-inner py-1 rounded-md">
            <span>Salon</span>
            <LuSofa className="w-7 h-7" />
          </div>
        </div>
        <div className="w-full pr-5">
          <span className="text-justify w-full flex">
            {t(CASADANA_KEYS.description)}
          </span>
        </div>
      </div>
    </div>
  )
}
