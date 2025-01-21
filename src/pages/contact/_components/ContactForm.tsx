import { Input } from '../../../components/ui/input.tsx'
import { Button } from '../../../components/ui/button.tsx'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { CASADANA_KEYS } from '../../../i18n/keys/CASADANA_KEYS.ts'
import { Textarea } from '../../../components/ui/textarea.tsx'
import { useSelectedDatesStore } from '../utils/useGetSelectedDates.tsx'
import { useGetReservations, usePostSelectedDates } from '../../../utils/hooks'
import { useToaster } from '../../../utils/providers/toaster.provider.tsx'
import { formatToDate } from '../utils/calendar.utils.ts'

export type ContactFormType = {
  firstname: string
  lastname: string
  email: string
  phone: string
  description: string
  start: Date
  end: Date
  price: number
}

export function ContactForm() {
  const methods = useForm<ContactFormType>()
  const { t } = useTranslation()
  const { selectedDates, reset: resetSelectionDate } = useSelectedDatesStore()
  const { mutate: createReservation } = usePostSelectedDates()
  const { refetch } = useGetReservations()
  const toast = useToaster()
  const { register, handleSubmit, reset } = methods

  const onSubmit = (data: ContactFormType) => {
    createReservation(
      {
        ...data,
        start: formatToDate(selectedDates.startDate),
        end: formatToDate(selectedDates.endDate)
      },
      {
        onSuccess: () => {
          toast?.success(
            t(CASADANA_KEYS.reservation.toaster.success, {
              startDate: selectedDates.startDate,
              endDate: selectedDates.endDate
            })
          )
          refetch().then(() => {
            reset()
            resetSelectionDate()
          })
        },
        onError: (error) => {
          toast?.error(error.message)
        }
      }
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 w-3/4">
      <div className="grid grid-cols-2 gap-2">
        <Input
          placeholder={t(CASADANA_KEYS.reservation.form.first_name)}
          className="rounded-full"
          {...register('firstname')}
        />
        <Input
          placeholder={t(CASADANA_KEYS.reservation.form.last_name)}
          className="rounded-full"
          {...register('lastname')}
        />
        <Input
          placeholder={t(CASADANA_KEYS.reservation.form.email)}
          className="rounded-full"
          {...register('email')}
        />
        <Input
          inputMode={'tel'}
          placeholder={t(CASADANA_KEYS.reservation.form.phone)}
          className="rounded-full"
          {...register('phone')}
        />
        <Textarea
          placeholder={'Bonjour, je souhaiterais réserver...'}
          className="rounded-lg col-span-2"
          {...register('description')}
        />
        <div className="col-span-2 flex justify-between items-center space-x-2 text-sm text-gray-500">
          <span>Total: {selectedDates.price} €</span>
          <span>
            Du: {selectedDates.startDate} Au: {selectedDates.endDate}
          </span>
        </div>
      </div>
      <Button className="rounded-full col-span-2 w-full">
        {t(CASADANA_KEYS.reservation.form.submit)}
      </Button>
    </form>
  )
}
