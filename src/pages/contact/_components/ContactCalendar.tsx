import Calendar from 'react-calendar'
import { useState } from 'react'
import { useLang } from '../../../i18n/hook/useLang.tsx'
import './calendar.style.css'

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
      prev2Label={null}
      next2Label={null}
      className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-lg w-2/3"
      tileClassName={({ date }) =>
        date.toDateString() === new Date().toDateString()
          ? 'bg-blue-500 text-white rounded-full my-0.5 mx-2 drop-shadow-md'
          : 'hover:bg-gray-100 rounded-lg my-0.5 mx-2 drop-shadow-md'
      }
    />
  )
}
