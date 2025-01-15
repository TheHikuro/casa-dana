import { t } from 'i18next'
import { CASADANA_KEYS } from '../../../i18n/keys/CASADANA_KEYS'
import { Loz1, Loz2, Loz3, Loz4, Loz5 } from '../../../assets/photos'
import { Button } from '../../../components/ui/button.tsx'
import { useNavigate } from 'react-router-dom'

export function LosAlcazares() {
  const navigate = useNavigate()
  const img = [Loz5, Loz1, Loz2, Loz3, Loz4]
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
      <div className="">
        <Button
          className="bg-yellow-400 text-black uppercase rounded-full py-3 px-2 hover:bg-yellow-500"
          onClick={() => navigate('/contact')}
        >
          {t(CASADANA_KEYS.los_alcazares.button)}
        </Button>
      </div>
    </div>
  )
}
