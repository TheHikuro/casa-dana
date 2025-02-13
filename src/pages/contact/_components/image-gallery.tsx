import { GridIcon } from 'lucide-react'
import {
  HouseLivingRoom1,
  HouseRoofTop4,
  HouseBedRoom1_1,
  HouseKitchen1,
  HouseBedRoom2
} from '../../../assets/photos'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger
} from '../../../components/ui/dialog.tsx'
import { Fragment } from 'react'
import { PhotoGallery } from './gallery/photo-gallery.tsx'
import { Button } from '../../../components/ui/button.tsx'
import { CASADANA_KEYS } from '../../../i18n/keys/CASADANA_KEYS.ts'
import { useTranslation } from 'react-i18next'
export function ImageGallery() {
  const { t } = useTranslation()
  return (
    <Fragment>
      <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-xl overflow-hidden aspect-[16/9]">
        <div className="col-span-2 row-span-2 relative">
          <img
            src={HouseLivingRoom1}
            alt="Modern property exterior"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative">
          <img
            src={HouseRoofTop4}
            alt="Interior seating area"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative">
          <img
            src={HouseBedRoom1_1}
            alt="Glass wall interior"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative">
          <img
            src={HouseBedRoom2}
            alt="Modern staircase"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative">
          <img
            src={HouseKitchen1}
            alt="Panoramic view interior"
            className="object-cover w-full h-full"
          />
          <Dialog>
            <DialogTrigger asChild>
              <Button className="absolute bottom-4 right-4 bg-white rounded-lg px-4 py-2 text-sm font-semibold shadow-md flex items-center gap-2 text-black hover:bg-yellow-500 hover:text-white">
                <GridIcon className="w-4 h-4" />
                {t(CASADANA_KEYS.gallery.show_photos)}
              </Button>
            </DialogTrigger>
            <DialogTitle>Casa Dana</DialogTitle>
            <DialogContent className="max-w-[95dvw] max-h-[95dvh] w-full h-full px-0 pt-10 pb-0">
              <PhotoGallery />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Fragment>
  )
}
