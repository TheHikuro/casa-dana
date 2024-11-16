import { GalleryLayout } from '../../components/gallery-layout.tsx'
import { img } from '../../utils/images.ts'
import { Button } from '../../components/ui/button.tsx'
import { t } from 'i18next'
import { CASADANA_KEYS } from '../../i18n/keys/CASADANA_KEYS.ts'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../../components'

export default function GalleryPage() {
  const navigate = useNavigate()
  return (
    <div className="px-5">
      <div className="flex space-x-5 justify-end">
        <Button
          className="uppercase rounded-lg py-3 px-2 my-5"
          onClick={() => navigate('/', { replace: true })}
        >
          {t(CASADANA_KEYS.casa_dana.gallery.button.back)}
        </Button>
        <Button
          className="bg-yellow-400 text-black uppercase rounded-lg py-3 px-2 hover:bg-yellow-500 my-5"
          onClick={() => navigate('/', { replace: true })}
        >
          {t(CASADANA_KEYS.los_alcazares.button)}
        </Button>
      </div>
      <div className="flex w-full justify-center items-center flex-col h-fit mt-5">
        <h2 className="font-medium text-xl mr-auto">Casa Dana</h2>
        <GalleryLayout img={img} />
        <Button className="bg-yellow-400 text-black uppercase rounded-full py-3 px-2 hover:bg-yellow-500 my-5">
          {t(CASADANA_KEYS.los_alcazares.button)}
        </Button>
      </div>
      <Footer />
    </div>
  )
}
