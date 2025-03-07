import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger
} from '../../../components/ui/dialog.tsx'
import { format } from 'date-fns'
import { Calendar } from '../../../components/ui/calendar.tsx'
import {
  FormValues,
  isDateDisabled,
  isDateRangeInvalid
} from '../utils/calendar.utils.ts'
import { UseFormSetValue } from 'react-hook-form'
import { DateRange } from 'react-day-picker'
import { Button } from '../../../components/ui/button.tsx'
import { ReservationDto } from '../../../api/models'
import { CASADANA_KEYS } from '../../../i18n/keys/CASADANA_KEYS.ts'
import { useTranslation } from 'react-i18next'

export function CalendarModal({
  date,
  setValue,
  getReservations
}: {
  date: DateRange
  setValue: UseFormSetValue<FormValues>
  getReservations: ReservationDto[]
}) {
  const { t } = useTranslation()
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="border rounded-xl divide-y cursor-pointer">
          <div className="grid grid-cols-2 divide-x">
            <div className="p-3 space-y-1">
              <div className="text-xs font-semibold uppercase">
                {t(CASADANA_KEYS.reservation.form.checkin)}
              </div>
              <div className="text-sm">
                {date.from
                  ? format(date.from, 'dd/MM/yyyy')
                  : t(CASADANA_KEYS.reservation.form.calendar.add_date)}
              </div>
            </div>
            <div className="p-3 space-y-1">
              <div className="text-xs font-semibold uppercase">
                {t(CASADANA_KEYS.reservation.form.checkout)}
              </div>
              <div className="text-sm">
                {date.to
                  ? format(date.to, 'dd/MM/yyyy')
                  : t(CASADANA_KEYS.reservation.form.calendar.add_date)}
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-fit p-10 gap-0">
        <DialogTitle>Reserver</DialogTitle>
        <Calendar
          mode="range"
          selected={date as DateRange}
          onSelect={(range) => {
            if (!isDateRangeInvalid(getReservations, range?.from, range?.to)) {
              setValue('from', range?.from)
              setValue('to', range?.to)
            }
          }}
          numberOfMonths={2}
          modifiersStyles={{
            disabled: { textDecoration: 'line-through' }
          }}
          disabled={(date) => isDateDisabled(date, getReservations)}
          showOutsideDays={false}
          fixedWeeks
        />
        <DialogFooter>
          <DialogClose asChild>
            <Button>{t(CASADANA_KEYS.reservation.form.modal.letsgo)}</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
