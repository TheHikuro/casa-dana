import { GridIcon } from 'lucide-react'
import Salon from '../../../assets/photos/salon_1.jpg'
import Terasse from '../../../assets/photos/solarium_1.jpg'
import Bed1 from '../../../assets/photos/chambre1_1.jpg'
import Bed2 from '../../../assets/photos/chambre2_1.jpg'
import Cuisine from '../../../assets/photos/cuisine_1.jpg'
interface ImageGalleryProps {
  onShowAllPhotos: () => void
}

export function ImageGallery({ onShowAllPhotos }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-xl overflow-hidden aspect-[16/9]">
      <div className="col-span-2 row-span-2 relative">
        <img
          src={Salon}
          alt="Modern property exterior"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="relative">
        <img
          src={Terasse}
          alt="Interior seating area"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="relative">
        <img
          src={Bed1}
          alt="Glass wall interior"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="relative">
        <img
          src={Bed2}
          alt="Modern staircase"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="relative">
        <img
          src={Cuisine}
          alt="Panoramic view interior"
          className="object-cover w-full h-full"
        />
        <button
          onClick={onShowAllPhotos}
          className="absolute bottom-4 right-4 bg-white rounded-lg px-4 py-2 text-sm font-semibold shadow-md flex items-center gap-2"
        >
          <GridIcon className="w-4 h-4" />
          Show all photos
        </button>
      </div>
    </div>
  )
}
