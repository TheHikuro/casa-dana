import { isAfter, isBefore, isWithinInterval, parseISO } from 'date-fns'

export type FormValues = {
  firstName: string
  lastName: string
  phone: string
  email: string
  guests: number
  description: string
  from?: Date
  to?: Date
}

export const EXISTING_RESERVATIONS = [
  {
    from: parseISO('2025-02-09T00:00:00Z'),
    to: parseISO('2025-02-16T00:00:00Z')
  }
]

export const PRICE_PER_NIGHT = 153

export const isDateDisabled = (date: Date): boolean => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return (
    isBefore(date, today) ||
    EXISTING_RESERVATIONS.some(({ from, to }) =>
      isWithinInterval(date, { start: from, end: to })
    )
  )
}

export const isDateRangeInvalid = (from?: Date, to?: Date): boolean => {
  if (!from || !to) return false
  return EXISTING_RESERVATIONS.some(
    ({ from: resFrom, to: resTo }) =>
      (isBefore(from, resFrom) && isAfter(to, resTo)) ||
      isWithinInterval(from, { start: resFrom, end: resTo }) ||
      isWithinInterval(to, { start: resFrom, end: resTo })
  )
}

export const defaultValues: FormValues = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  guests: 1,
  description: '',
  from: undefined,
  to: undefined
}
