import { useEffect, useState } from 'react'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem
} from './ui/carousel.tsx'

interface CarouselImgProps {
  img: string[]
}

export function CarouselImg({ img }: CarouselImgProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className={'flex flex-col'}>
      <Carousel setApi={setApi} className={'absolute left-0'}>
        <CarouselContent>
          {img.map((imageUrl, idx) => (
            <CarouselItem key={imageUrl}>
              <img
                className="object-cover w-full h-52"
                src={imageUrl}
                alt={`Gallery ${idx + 1}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="p-2 text-center text-sm text-white absolute bg-black/20 right-3 top-[13.5rem] rounded-lg">
        {current} / {img.length}
      </div>
    </div>
  )
}
