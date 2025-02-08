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

export function CalendarModal({
  date,
  setValue
}: {
  date: DateRange
  setValue: UseFormSetValue<FormValues>
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="border rounded-xl divide-y cursor-pointer">
          <div className="grid grid-cols-2 divide-x">
            <div className="p-3 space-y-1">
              <div className="text-xs font-semibold uppercase">Check-in</div>
              <div className="text-sm">
                {date.from ? format(date.from, 'MM/dd/yyyy') : 'Add date'}
              </div>
            </div>
            <div className="p-3 space-y-1">
              <div className="text-xs font-semibold uppercase">Checkout</div>
              <div className="text-sm">
                {date.to ? format(date.to, 'MM/dd/yyyy') : 'Add date'}
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-fit p-10 gap-0">
        <DialogTitle>Reserver</DialogTitle>
        <Calendar
          mode="range"
          selected={date as any}
          onSelect={(range) => {
            if (!isDateRangeInvalid(range?.from, range?.to)) {
              setValue('from', range?.from)
              setValue('to', range?.to)
            }
          }}
          numberOfMonths={2}
          modifiersStyles={{
            disabled: { textDecoration: 'line-through' }
          }}
          disabled={isDateDisabled}
          showOutsideDays={false}
          fixedWeeks
        />
        <DialogFooter>
          <DialogClose asChild>
            <Button>Let's go 🚀</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
