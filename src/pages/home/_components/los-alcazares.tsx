import { t } from 'i18next'
import { CASADANA_KEYS } from '../../../i18n/keys/CASADANA_KEYS'
import { Loz1, Loz2, Loz3, Loz4, Loz5, Loz6 } from '../../../assets/photos'

export function LosAlcazares() {
  const img = [Loz6, Loz5, Loz1, Loz2, Loz3, Loz4]
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-medium">Los Alcazares</h2>
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
      <div className="">
        <span className="text-justify w-full flex">
          {t(CASADANA_KEYS.los_alcazares.description)}
        </span>
      </div>
    </div>
  )
}
