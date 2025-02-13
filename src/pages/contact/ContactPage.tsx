import { ImageGallery } from './_components'
import ReservationForm from './_components/reservation-form.tsx'

export default function ContactPage() {
  return (
    <div className="mx-auto h-full">
      <div className="grid lg:grid-cols-5 gap-8  h-full">
        <div className="lg:top-4 sm:flex justify-center items-center col-span-3 hidden">
          <ImageGallery />
        </div>
        <div className={'flex justify-center items-center col-span-2'}>
          <ReservationForm />
        </div>
      </div>
    </div>
  )
}
