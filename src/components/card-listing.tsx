import { Trans } from 'react-i18next'
import { IconType } from 'react-icons'

interface CardListingProps {
  name: string
  icon: IconType
}

export function CardListing({ name, icon: Icon }: CardListingProps) {
  return (
    <div className="flex flex-col justify-center items-center border shadow-inner rounded-lg p-2 aspect-square space-y-2">
      <div className="flex justify-center items-center">
        <Icon className="h-5 w-5 drop-shadow-md" />
      </div>
      <div className="flex justify-center items-center text-xs text-center">
        <Trans i18nKey={name} />
      </div>
    </div>
  )
}
