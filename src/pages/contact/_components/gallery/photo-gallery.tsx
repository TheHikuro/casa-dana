import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { rooms } from './gallery.utils.ts'
import { Button } from '../../../../components/ui/button.tsx'
import { Dialog, DialogContent } from '../../../../components/ui/dialog.tsx'
import { useTranslation } from 'react-i18next'

export function PhotoGallery() {
  const { t } = useTranslation()
  const _rooms = rooms(t)
  const [activeSection, setActiveSection] = useState(_rooms[0].id)
  const [selectedImage, setSelectedImage] = useState<{
    url: string
    roomName: string
    index: number
    roomId: string
  } | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    document
      .querySelectorAll('[data-section]')
      .forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return

    const currentRoom = _rooms.find((room) => room.id === selectedImage.roomId)
    if (!currentRoom) return

    let newIndex =
      direction === 'next' ? selectedImage.index + 1 : selectedImage.index - 1

    if (newIndex >= currentRoom.images.length) {
      const nextRoomIndex = _rooms.findIndex((r) => r.id === currentRoom.id) + 1
      if (nextRoomIndex < _rooms.length) {
        const nextRoom = _rooms[nextRoomIndex]
        setSelectedImage({
          url: nextRoom.images[0],
          roomName: nextRoom.name,
          index: 0,
          roomId: nextRoom.id
        })
      }
    } else if (newIndex < 0) {
      const prevRoomIndex = _rooms.findIndex((r) => r.id === currentRoom.id) - 1
      if (prevRoomIndex >= 0) {
        const prevRoom = _rooms[prevRoomIndex]
        newIndex = prevRoom.images.length - 1
        setSelectedImage({
          url: prevRoom.images[newIndex],
          roomName: prevRoom.name,
          index: newIndex,
          roomId: prevRoom.id
        })
      }
    } else {
      setSelectedImage({
        ...selectedImage,
        url: currentRoom.images[newIndex],
        index: newIndex
      })
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative overflow-scroll">
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b">
        <div className="mx-auto">
          <div className="flex items-center gap-4 p-4 overflow-x-auto">
            {_rooms.map((room) => (
              <Button
                key={room.id}
                variant={activeSection === room.id ? 'default' : 'ghost'}
                onClick={() => scrollToSection(room.id)}
                className="whitespace-nowrap"
              >
                {room.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto p-4">
        {_rooms.map((room) => (
          <section
            key={room.id}
            id={room.id}
            data-section={room.id}
            className="py-8 first:pt-4"
          >
            <h2 className="text-2xl font-semibold mb-6 sticky top-20">
              {room.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {room.images.map((image, idx) => (
                <button
                  key={idx}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
                  onClick={() =>
                    setSelectedImage({
                      url: image,
                      roomName: room.name,
                      index: idx,
                      roomId: room.id
                    })
                  }
                >
                  <img
                    src={image || '/placeholder.svg'}
                    alt={`${room.name} view ${idx + 1}`}
                    className="object-center object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0">
          <div className="relative flex items-center justify-center bg-black/90 rounded-lg overflow-hidden">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            {selectedImage && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 z-10 text-white hover:bg-white/20"
                  onClick={() => navigateImage('prev')}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <div className="relative w-full container">
                  <img
                    src={selectedImage.url || '/placeholder.svg'}
                    alt={`${selectedImage.roomName} view ${selectedImage.index + 1}`}
                    className="object-center object-cover relative"
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 z-10 text-white hover:bg-white/20"
                  onClick={() => navigateImage('next')}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white text-sm bg-black/50 inline-block px-4 py-2 rounded-full">
                    {selectedImage.roomName} - {selectedImage.index + 1} /
                    {
                      _rooms.find((r) => r.id === selectedImage.roomId)?.images
                        .length
                    }
                  </p>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
