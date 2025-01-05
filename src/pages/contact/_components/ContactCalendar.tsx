import Calendar from 'react-calendar'
import { useMemo, useState } from 'react'
import { useLang } from '../../../i18n/hook/useLang'
import './calendar.style.css'
import { cn } from '../../../../@/lib/utils'
import { useGetReservations } from '../../../utils/hooks'

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

export function ContactCalendar() {
  const { currentLanguage } = useLang()
  const [value, onChange] = useState<Value | null>(null)

  const { reservations } = useGetReservations()

  const normalizeDate = (date: Date) => {
    const normalized = new Date(date)
    normalized.setHours(0, 0, 0, 0)
    return normalized
  }

  const reservedRanges = useMemo(() => {
    return (
      reservations?.map(({ start, end }) => ({
        start: normalizeDate(new Date(start)),
        end: normalizeDate(new Date(end))
      })) || []
    )
  }, [reservations])

  const isDateInReservedRange = (date: Date) => {
    const normalizedDate = normalizeDate(date)
    return reservedRanges.some(
      ({ start, end }) => normalizedDate >= start && normalizedDate <= end
    )
  }

  const anteriorFromTodayOrReserved = (date: Date, view: string) => {
    const today = normalizeDate(new Date())

    const isReserved = isDateInReservedRange(date)

    switch (view) {
      case 'month': {
        return date < today || isReserved
      }
      case 'year': {
        if (date.getFullYear() < today.getFullYear()) return true
        return (
          date.getFullYear() === today.getFullYear() &&
          date.getMonth() < today.getMonth()
        )
      }
      case 'decade': {
        return date.getFullYear() < today.getFullYear()
      }
      default:
        return false
    }
  }

  return (
    <Calendar
      onChange={onChange}
      value={value}
      tileDisabled={({ date, view }) =>
        anteriorFromTodayOrReserved(date, view) ?? false
      }
      locale={currentLanguage}
      selectRange={!!value}
      minDate={new Date()}
      prev2Label={null}
      next2Label={null}
      className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-lg w-2/3"
      tileClassName={({ date, view }) =>
        cn(`
          ${view === 'month' && date.toDateString() === new Date().toDateString() ? 'bg-blue-500 text-white' : ''}
          ${
            view === 'month' && anteriorFromTodayOrReserved(date, view)
              ? 'disabled-tile'
              : ''
          }
          rounded-lg my-0.5 mx-2
        `)
      }
    />
  )
}
