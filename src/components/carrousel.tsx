import { Carousel } from '@material-tailwind/react'

interface CarouselImgProps {
  img: Array<{ src: string; alt: string }>
}

export function CarouselImg({ img }: CarouselImgProps) {
  return (
    <div className="relative h-72 w-dvw -ml-5">
      <Carousel
        className="rounded-none"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 justify-center">
            {new Array(length).fill('').map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
                }`}
                onClick={() => {
                  setActiveIndex(i)
                }}
              />
            ))}
          </div>
        )}
      >
        {img.map((img, index) => (
          <img
            src={img.src}
            alt={img.alt}
            className="h-full w-full object-cover"
            key={index}
          />
        ))}
      </Carousel>
    </div>
  )
}
