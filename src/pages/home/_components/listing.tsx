import { BiWifi } from 'react-icons/bi'
import { FaCarAlt, FaUmbrellaBeach } from 'react-icons/fa'
import { GiBarbecue } from 'react-icons/gi'
import { IoSnowOutline } from 'react-icons/io5'
import { PiSunHorizonDuotone, PiTowelDuotone } from 'react-icons/pi'
import { Fragment } from 'react/jsx-runtime'
import { CardListing } from '../../../components/card-listing'

export function Listing() {
  return (
    <Fragment>
      <h2>Equipement</h2>
      <div className="grid grid-cols-4 gap-4 ">
        <CardListing name="Jacuzzi" icon={BiWifi} />
        <CardListing name="Wifi" icon={BiWifi} />
        <CardListing name="BBQ" icon={GiBarbecue} />
        <CardListing name="Climatisation" icon={IoSnowOutline} />
        <CardListing name="Solarium" icon={PiSunHorizonDuotone} />
        <CardListing name="Parking facile" icon={FaCarAlt} />
        <CardListing name="Draps Serviettes" icon={PiTowelDuotone} />
        <CardListing name={`Proche de \n la plage`} icon={FaUmbrellaBeach} />
      </div>
    </Fragment>
  )
}
