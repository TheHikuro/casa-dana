import { differenceInDays, isAfter, isBefore, isWithinInterval } from 'date-fns'
import { ReservationDto } from '../../../api/models'

export type FormValues = {
  firstName: string
  lastName: string
  phone: string
  email: string
  guests: string
  description: string
  from?: Date
  to?: Date
}
export type PriceDetail = { date: Date; price: number }
export type APIPriceData = { date: string; price: number | null }

export const DEFAULT_PRICE = 90

export const isDateDisabled = (
  date: Date,
  existingReservation: ReservationDto[]
): boolean => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return (
    isBefore(date, today) ||
    existingReservation.some(({ start, end }) =>
      isWithinInterval(date, { start, end })
    )
  )
}

export const isDateRangeInvalid = (
  existingReservation: ReservationDto[],
  from?: Date,
  to?: Date
): boolean => {
  if (!from || !to) return false
  return existingReservation.some(
    ({ start: resFrom, end: resTo }) =>
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
  guests: '1',
  description: '',
  from: undefined,
  to: undefined
}

export function formatPriceData(
  apiData: APIPriceData[],
  defaultPrice: number
): PriceDetail[] {
  return (apiData ?? []).map(({ date, price }) => ({
    date: new Date(date),
    price: price ?? defaultPrice
  }))
}

export function calculateNights(from?: Date, to?: Date): number {
  return from && to ? differenceInDays(to, from) : 0
}

export function groupNightsByPrice(priceDetails: PriceDetail[]) {
  if (!priceDetails.length) return []

  const groupedMap = new Map<number, number>()

  priceDetails.forEach(({ price }) => {
    groupedMap.set(price, (groupedMap.get(price) || 0) + 1)
  })

  return Array.from(groupedMap.entries()).map(([price, nights]) => ({
    price,
    nights
  }))
}

export const toISODate = (date: Date) => {
  const fixedDate = new Date(date)
  fixedDate.setHours(0, 0, 0, 0)
  return fixedDate.toISOString()
}
