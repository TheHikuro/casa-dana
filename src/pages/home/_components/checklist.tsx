import { t } from 'i18next'
import { CgCheck } from 'react-icons/cg'
import { CASADANA_KEYS } from '../../../i18n/keys/CASADANA_KEYS'

export function Checklist() {
  const checkList = [
    CASADANA_KEYS.checklist.first,
    CASADANA_KEYS.checklist.second,
    CASADANA_KEYS.checklist.third,
    CASADANA_KEYS.checklist.fourth,
    CASADANA_KEYS.checklist.fifth,
    CASADANA_KEYS.checklist.sixth
  ]
  return (
    <div className="flex flex-col">
      {checkList.map((check, index) => (
        <div className="flex items-center space-x-2" key={index}>
          <CgCheck className="w-10 h-10 text-yellow-700 drop-shadow-md" />
          <span>{t(check)}</span>
        </div>
      ))}
    </div>
  )
}
