import { t } from 'i18next'
import { CASADANA_KEYS } from '../../../i18n/keys/CASADANA_KEYS'
import Los1 from '../../../assets/photos/los_1.png'
import Los2 from '../../../assets/photos/los_2.png'
import Los3 from '../../../assets/photos/los_3.png'
import Los4 from '../../../assets/photos/los_4.png'
import Los5 from '../../../assets/photos/los_5.png'

export function LosAlcazares() {
  const img = [Los1, Los2, Los3, Los4, Los5]
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-medium">Los Alcazares</h2>
      <div className="flex space-x-5">
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
      <div className="">
        <button className="bg-yellow-500 text-black uppercase rounded-lg py-3 px-2">
          {t(CASADANA_KEYS.los_alcazares.button)}
        </button>
      </div>
    </div>
  )
}
