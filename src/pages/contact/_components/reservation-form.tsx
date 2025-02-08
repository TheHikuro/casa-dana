import { useForm } from 'react-hook-form'
import { differenceInDays } from 'date-fns'
import { Button } from '../../../components/ui/button.tsx'
import { Label } from '../../../components/ui/label.tsx'
import { Input } from '../../../components/ui/input.tsx'
import { Textarea } from '../../../components/ui/textarea.tsx'
import { DateRange } from 'react-day-picker'
import {
  FormValues,
  isDateRangeInvalid,
  PRICE_PER_NIGHT,
  defaultValues
} from '../utils/calendar.utils.ts'
import { CalendarModal } from './calendar-modal.tsx'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../../../components/ui/select.tsx'
import { zodResolver } from '@hookform/resolvers/zod'
import { getContactSchema } from '../utils/contact.schema.ts'
import { useTranslation } from 'react-i18next'

export default function ReservationForm() {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(getContactSchema(t))
  })

  const date: DateRange = watch() as DateRange
  const nights = date.from && date.to ? differenceInDays(date.to, date.from) : 0
  const invalidDateRange = isDateRangeInvalid(date.from, date.to)

  return (
    <div className="w-full max-w-xl mx-auto border rounded-xl p-6 shadow-lg">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold">€{PRICE_PER_NIGHT}</span>
          <span className="text-gray-600">{nights} night</span>
        </div>
        <CalendarModal {...{ date, setValue }} />
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="gap-4 grid col-span-2"
        >
          <div className="col-span-1">
            <Label htmlFor={'firstName'}>First Name</Label>
            <Input {...register('firstName', { required: true })} />
            <span className="text-red-500 text-sm italic">
              {errors.firstName?.message}
            </span>
          </div>
          <div className="col-span-1">
            <Label htmlFor={'lastName'}>Last Name</Label>
            <Input {...register('lastName', { required: true })} />
            <span className="text-red-500 text-sm italic">
              {errors.lastName?.message}
            </span>
          </div>
          <div className="col-span-2">
            <Label htmlFor={'email'}>Email</Label>
            <Input {...register('email')} />
            <span className="text-red-500 text-sm italic">
              {errors.email?.message}
            </span>
          </div>
          <div>
            <Label htmlFor={'phone'}>Phone</Label>
            <Input {...register('phone')} />
            <span className="text-red-500 text-sm italic">
              {errors.phone?.message}
            </span>
          </div>
          <div>
            <Label htmlFor={'guests'}>Guests</Label>
            <Select {...register('guests')}>
              <SelectTrigger>
                <SelectValue placeholder="1 Personne" />
              </SelectTrigger>
              <SelectContent>
                {[...Array(6)].map((_, i) => (
                  <SelectItem key={i} value={(i + 1).toString()}>
                    {i + 1} guest
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-2">
            <Label htmlFor={'description'}>Description</Label>
            <Textarea {...register('description')} maxLength={200} />
          </div>
          <Button
            className="w-full col-span-2"
            size="lg"
            type="submit"
            disabled={!date.from || !date.to || nights < 6 || invalidDateRange}
          >
            {nights < 6 ? '6 nights minimum' : 'Reserve'}
          </Button>
        </form>
      </div>
    </div>
  )
}
