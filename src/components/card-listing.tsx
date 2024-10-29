import { Trans } from 'react-i18next'
import { IconType } from 'react-icons'

interface CardListingProps {
  name: string
  icon: IconType
}

export function CardListing({ name, icon: Icon }: CardListingProps) {
  return (
    <div className="flex sm:flex-row sm:justify-start sm:space-x-5 flex-col justify-center items-center border shadow-inner rounded-lg p-2 sm:w-full aspect-square space-y-2 sm:max-h-20 w-full">
      <div className="flex justify-center items-center sm:ml-4">
        <Icon className="h-5 w-5 drop-shadow-md sm:h-10 sm:w-10" />
      </div>
      <div className="flex justify-center items-center text-xs sm:text-lg text-center">
        <Trans i18nKey={name} />
      </div>
    </div>
  )
}
