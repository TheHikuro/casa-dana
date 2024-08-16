import { useTranslation } from 'react-i18next'
// import { CASADANA_KEYS } from '../i18n/keys/CASADANA_KEYS'
import { ACCEPTED_LANGUAGES } from '../utils/enum'
import i18next from 'i18next'
import { CarouselImg } from '../components'
import Salon from '../assets/photos/photo_1.png'
import Terrasse from '../assets/photos/photo_2.png'
import Chambre from '../assets/photos/photo_3.png'
import Chambre_2 from '../assets/photos/photo_4.png'
import Salon_2 from '../assets/photos/photo_5.png'
import Terrasse_2 from '../assets/photos/photo_6.png'

export default function Home() {
  const { t } = useTranslation()
  const handleChangeLanguage = (language: ACCEPTED_LANGUAGES) => {
    i18next.changeLanguage(language)
    localStorage.setItem('selectedLanguage', language)
  }
  const img = [Salon, Terrasse, Chambre, Chambre_2, Salon_2, Terrasse_2]
  return (
    <div className="flex flex-col">
      <CarouselImg
        img={img.map((img, index) => ({
          src: img,
          alt: `image ${index + 1}`
        }))}
      />
    </div>
  )
}
