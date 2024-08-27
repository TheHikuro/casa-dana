import { useTranslation } from 'react-i18next'
import Activity1 from '../../../assets/photos/acti_1.png'
import Activity2 from '../../../assets/photos/acti_2.png'
import Activity3 from '../../../assets/photos/acti_3.png'
import Activity4 from '../../../assets/photos/acti_4.png'
import Activity5 from '../../../assets/photos/acti_5.png'
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
