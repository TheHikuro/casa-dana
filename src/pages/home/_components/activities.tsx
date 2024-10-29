import { useTranslation } from 'react-i18next'
import {
  Activity1,
  Activity2,
  Activity3,
  Activity4,
  Activity5
} from '../../../assets/photos'
import { CASADANA_KEYS } from '../../../i18n/keys/CASADANA_KEYS'

export function Activities() {
  const { t } = useTranslation()
  const img = [Activity1, Activity2, Activity3, Activity4, Activity5]
  return (
    <div className="space-y-7">
      <h2 className="text-xl font-medium">
        {t(CASADANA_KEYS.activities.title)}
      </h2>
      <div className="flex space-x-5 overflow-x-scroll">
        {img.map((img, index) => (
          <img
            src={img}
            alt={`${index + 1}`}
            className="w-full h-64 min-w-80 object-cover rounded-2xl"
            key={index}
          />
        ))}
      </div>
    </div>
  )
}
