import Calendar from 'react-calendar'
import { useState } from 'react'
import 'react-calendar/dist/Calendar.css'
import { useLang } from '../../../i18n/hook/useLang.tsx'

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

export function ContactCalendar() {
  const { currentLanguage } = useLang()
  const [value, onChange] = useState<Value | null>(null)

  return (
    <Calendar
      onChange={onChange}
      value={value}
      locale={currentLanguage}
      selectRange={!!value}
      minDate={new Date()}
    />
  )
}
