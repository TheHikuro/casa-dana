import { Controller, useForm } from 'react-hook-form'
import { Button } from '../../../components/ui/button.tsx'
import { Label } from '../../../components/ui/label.tsx'
import { Input } from '../../../components/ui/input.tsx'
import { Textarea } from '../../../components/ui/textarea.tsx'
import { DateRange } from 'react-day-picker'
import {
  FormValues,
  isDateRangeInvalid,
  defaultValues,
  DEFAULT_PRICE,
  formatPriceData,
  calculateNights,
  APIPriceData,
  groupNightsByPrice,
  toISODate
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
import { useToaster } from '../../../utils/providers/toaster.provider.tsx'
import {
  useGetReservations,
  usePostReservations
} from '../../../api/endpoints/reservations/reservations.ts'
import { useGetCalendarPrice } from '../../../api/endpoints/calendar/calendar.ts'
import { CASADANA_KEYS } from '../../../i18n/keys/CASADANA_KEYS.ts'

export default function ReservationForm() {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    getValues,
    formState: { errors },
    control
  } = useForm<FormValues>({
    ...defaultValues,
    resolver: zodResolver(getContactSchema(t))
  })
  const toast = useToaster()
  const { mutate: createReservation } = usePostReservations()
  const { data: { data: getReservations = [] } = {} } = useGetReservations()
  const { data: { data: getPricePerDates = [] } = {} } = useGetCalendarPrice(
    {
      start: getValues('from')?.toLocaleDateString('fr-FR'),
      end: getValues('to')?.toLocaleDateString('fr-FR')
    },
    { query: { enabled: !!getValues('from') && !!getValues('to') } }
  )

  const date: DateRange = watch() as DateRange
  const nights = calculateNights(date.from, date.to)
  const invalidDateRange = isDateRangeInvalid(
    getReservations,
    date.from,
    date.to
  )
  const priceDetails = formatPriceData(
    (getPricePerDates as APIPriceData[]) ?? [],
    DEFAULT_PRICE
  )

  const groupedPrices = groupNightsByPrice(priceDetails)
  const total = groupedPrices
    .map(({ price, nights }) => price * nights)
    .reduce((acc, curr) => acc + curr, 0)

  const onSubmit = (data: FormValues) => {
    const formatedGuests = Number(data.guests)
    createReservation(
      {
        data: {
          ...data,
          numberOfPersons: formatedGuests,
          start: toISODate(date.from!),
          end: toISODate(date.to!),
          price: total
        }
      },
      {
        onSuccess: async ({ data: { firstName } }) => {
          toast?.success(
            t(CASADANA_KEYS.reservation.form.calendar.reservation_confirmed, {
              firstName
            })
          )
          reset()
        },
        onError: (error) => {
          toast?.error(error.message)
        }
      }
    )
  }

  return (
    <div className="w-full max-w-xl mx-auto border rounded-xl p-6 shadow-lg">
      <div className="space-y-4">
        <CalendarModal {...{ date, setValue, getReservations }} />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="gap-4 grid col-span-2"
        >
          <div className="col-span-1">
            <Label htmlFor={'firstName'}>
              {t(CASADANA_KEYS.reservation.form.first_name)}
            </Label>
            <Input {...register('firstName', { required: true })} />
            <span className="text-red-500 text-sm italic">
              {errors.firstName?.message}
            </span>
          </div>
          <div className="col-span-1">
            <Label htmlFor={'lastName'}>
              {t(CASADANA_KEYS.reservation.form.last_name)}
            </Label>
            <Input {...register('lastName', { required: true })} />
            <span className="text-red-500 text-sm italic">
              {errors.lastName?.message}
            </span>
          </div>
          <div className="col-span-2">
            <Label htmlFor={'email'}>
              {t(CASADANA_KEYS.reservation.form.email)}
            </Label>
            <Input {...register('email')} />
            <span className="text-red-500 text-sm italic">
              {errors.email?.message}
            </span>
          </div>
          <div>
            <Label htmlFor={'phone'}>
              {t(CASADANA_KEYS.reservation.form.phone)}
            </Label>
            <Input {...register('phone')} />
            <span className="text-red-500 text-sm italic">
              {errors.phone?.message}
            </span>
          </div>
          <div>
            <Label htmlFor={'guests'}>
              {t(CASADANA_KEYS.reservation.form.guests)}
            </Label>
            <Controller
              control={control}
              name="guests"
              defaultValue={'1'}
              rules={{
                required: 'Veuillez sélectionner un nombre de personnes'
              }}
              render={({ field }) => (
                <Select
                  onValueChange={(val) => field.onChange(val)}
                  value={field.value.toString() ?? '1'}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="1 Personne" />
                  </SelectTrigger>
                  <SelectContent>
                    {[...Array(6)].map((_, i) => (
                      <SelectItem key={i} value={(i + 1).toString()}>
                        {i + 1} {t(CASADANA_KEYS.reservation.guest)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="col-span-2">
            <Label htmlFor={'description'}>
              {t(CASADANA_KEYS.reservation.form.description)}
            </Label>
            <Textarea
              {...register('description')}
              maxLength={250}
              className="resize-none"
              placeholder={t(
                CASADANA_KEYS.reservation.form.placeholder.description
              )}
            />
          </div>
          {date.from && date.to && (
            <div className="space-y-4 col-span-2">
              {groupedPrices.map(({ price, nights }) => (
                <div key={price} className="flex justify-between">
                  <span className="underline">
                    €{price} x {nights} {t(CASADANA_KEYS.reservation.nights)}
                  </span>
                  <span>€{price * nights}</span>
                </div>
              ))}
              <div className="pt-4 border-t flex justify-between font-semibold">
                <span>{t(CASADANA_KEYS.reservation.total)}</span>
                <span>€{total}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>{t(CASADANA_KEYS.reservation.nights)}</span>
                <span>{nights}</span>
              </div>
            </div>
          )}

          <Button
            className="w-full col-span-2"
            size="lg"
            type="submit"
            disabled={!date.from || !date.to || nights < 6 || invalidDateRange}
          >
            {nights < 6
              ? t(CASADANA_KEYS.reservation.form.nights_min, { nights: 6 })
              : t(CASADANA_KEYS.calendar.reservation.reserved)}
          </Button>
        </form>
      </div>
    </div>
  )
}
