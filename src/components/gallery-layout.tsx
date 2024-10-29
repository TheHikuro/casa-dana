import BlurFade from '../../@/components/magicui/blur-fade'

interface BlurFadeDemoProps {
  img: string[]
}

export function GalleryLayout({ img }: BlurFadeDemoProps) {
  return (
    <section id="photos" className="mt-3">
      <div className="columns-2 gap-4 sm:columns-3">
        {img.map((imageUrl, idx) => (
          <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
            <img
              className="mb-4 size-full rounded-lg object-contain"
              src={imageUrl}
              alt={`Gallery ${idx + 1}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  )
}
