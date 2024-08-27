import { BiWifi } from 'react-icons/bi'
import { FaCarAlt, FaSwimmingPool, FaUmbrellaBeach } from 'react-icons/fa'
import { GiBarbecue } from 'react-icons/gi'
import { IoSnowOutline } from 'react-icons/io5'
import { PiSunHorizonDuotone, PiTowelDuotone } from 'react-icons/pi'
import { CardListing } from '../../../components/card-listing'
import { useTranslation } from 'react-i18next'
import { CASADANA_KEYS } from '../../../i18n/keys/CASADANA_KEYS'

export function Listing() {
  const { t } = useTranslation()
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-medium">{t(CASADANA_KEYS.listing.name)}</h2>
      <div className="grid grid-cols-4 gap-4 ">
        <CardListing
          name={CASADANA_KEYS.listing.jacuzzi}
          icon={FaSwimmingPool}
        />
        <CardListing name={CASADANA_KEYS.listing.wifi} icon={BiWifi} />
        <CardListing name={CASADANA_KEYS.listing.bbq} icon={GiBarbecue} />
        <CardListing name={CASADANA_KEYS.listing.clim} icon={IoSnowOutline} />
        <CardListing
          name={CASADANA_KEYS.listing.solarium}
          icon={PiSunHorizonDuotone}
        />
        <CardListing name={CASADANA_KEYS.listing.parking} icon={FaCarAlt} />
        <CardListing
          name={CASADANA_KEYS.listing.fournitures}
          icon={PiTowelDuotone}
        />
        <CardListing
          name={CASADANA_KEYS.listing.beach}
          icon={FaUmbrellaBeach}
        />
      </div>
    </div>
  )
}
