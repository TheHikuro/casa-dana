import { t } from 'i18next'
import { CgCheck } from 'react-icons/cg'
import { CASADANA_KEYS } from '../../../i18n/keys/CASADANA_KEYS'

export function Checklist() {
  const checkList = [
    CASADANA_KEYS.casa_dana.checklist.first,
    CASADANA_KEYS.casa_dana.checklist.second,
    CASADANA_KEYS.casa_dana.checklist.third,
    CASADANA_KEYS.casa_dana.checklist.fourth,
    CASADANA_KEYS.casa_dana.checklist.fifth,
    CASADANA_KEYS.casa_dana.checklist.sixth
  ]
  return (
    <div className="flex flex-col">
      {checkList.map((check, index) => (
        <div className="flex items-center space-x-2" key={index}>
          <CgCheck className="w-10 h-10 text-yellow-400 drop-shadow-md" />
          <span>{t(check)}</span>
        </div>
      ))}
    </div>
  )
}
