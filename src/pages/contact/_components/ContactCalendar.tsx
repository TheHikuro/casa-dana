import Calendar from 'react-calendar'
import { useMemo, useCallback, useState } from 'react'
import { useLang } from '../../../i18n/hook/useLang'
import './calendar.style.css'
import { cn } from '../../../../@/lib/utils'
import { useGetReservations } from '../../../utils/hooks'
import { useSelectedDatesStore } from '../utils/useGetSelectedDates.tsx'
import { normalizeDate } from '../utils/calendar.utils.ts'
import { CASADANA_KEYS } from '../../../i18n/keys/CASADANA_KEYS.ts'
import { useTranslation } from 'react-i18next'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

export function ContactCalendar() {
  const { currentLanguage } = useLang()
  const [value, setValue] = useState<Value | null>(null)
  const { reservations } = useGetReservations()
  const { t } = useTranslation()

  const { setStartDate, setEndDate, setPrice } = useSelectedDatesStore()

  const reservedRanges = useMemo(
    () =>
      reservations?.map(({ start, end }: { start: string; end: string }) => ({
        start: normalizeDate(new Date(start)),
        end: normalizeDate(new Date(end))
      })) || [],
    [reservations]
  )

  const isDateInReservedRange = useCallback(
    (date: Date) => {
      const normalizedDate = normalizeDate(date)
      return reservedRanges.some(
        ({ start, end }) => normalizedDate >= start && normalizedDate <= end
      )
    },
    [reservedRanges]
  )

  const calculatePrice = (
    startDate: Date,
    endDate: Date,
    price: number = 88 // FIXME: Hardcoded price change when price is implemented in supabase db
  ) => {
    const dayCount =
      Math.ceil(
        (normalizeDate(endDate).getTime() -
          normalizeDate(startDate).getTime()) /
          (1000 * 60 * 60 * 24)
      ) + 1
    return dayCount * price
  }

  const reservationsStatusPerDates = useMemo(() => {
    const statusMap: { [key: string]: boolean } = {}
    reservations?.forEach(({ start, end, status }) => {
      const currentDate = new Date(start)
      const endDate = new Date(end)
      while (currentDate <= endDate) {
        statusMap[currentDate.toDateString()] = status
        currentDate.setDate(currentDate.getDate() + 1)
      }
    })
    return statusMap
  }, [reservations])

  const handleDateSelection = (selectedValue: Value) => {
    if (!selectedValue) {
      setStartDate('')
      setEndDate('')
      setPrice(0)
      return
    }

    setValue(selectedValue)

    if (Array.isArray(selectedValue)) {
      const [startDate, endDate] = selectedValue
      const price = calculatePrice(startDate!, endDate!)
      setStartDate(startDate!.toLocaleDateString(currentLanguage))
      setEndDate(endDate!.toLocaleDateString(currentLanguage))
      setPrice(price)
    } else {
      setStartDate(selectedValue.toDateString())
      setEndDate('')
      setPrice(45)
    }
  }

  return (
    <Calendar
      onChange={handleDateSelection}
      value={value}
      tileDisabled={({ date }) =>
        isDateInReservedRange(date) || date < new Date()
      }
      locale={currentLanguage}
      selectRange
      minDate={new Date()}
      prev2Label={null}
      next2Label={null}
      nextLabel={
        <div className="text-yellow-500 w-20 shadow-md rounded-md border hover:bg-yellow-300">
          {'>'}
        </div>
      }
      prevLabel={
        <div className="text-yellow-500 w-20 shadow-md rounded-md border hover:bg-yellow-300">
          {'<'}
        </div>
      }
      className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-lg w-2/3"
      tileClassName={({ date, view }) =>
        cn(`
        ${
          view === 'month' &&
          date.toDateString() === new Date().toDateString() &&
          'bg-blue-500 text-white'
        }
        ${view === 'month' && isDateInReservedRange(date) && 'disabled-tile'}
        rounded-lg my-0.5 shadow-sm
      `)
      }
      tileContent={({ date }) => {
        const weekday = date.toLocaleDateString(currentLanguage, {
          weekday: 'short'
        })

        return (
          <div>
            <div className="text-[0.5rem] text-gray-500">{weekday}</div>
            {isDateInReservedRange(date) ? (
              <div
                className={cn(
                  `text-[0.5rem] italic ${
                    reservationsStatusPerDates[date.toDateString()]
                      ? 'text-red-500'
                      : 'text-orange-500'
                  }`
                )}
              >
                {reservationsStatusPerDates[date.toDateString()]
                  ? t(CASADANA_KEYS.calendar.reservation.reserved)
                  : t(CASADANA_KEYS.calendar.reservation.pending)}
              </div>
            ) : (
              <div className="text-[0.5rem] italic">88€</div>
            )}
          </div>
        )
      }}
      showNeighboringMonth={false}
    />
  )
}
