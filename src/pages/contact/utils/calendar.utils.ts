import {
  differenceInDays,
  eachDayOfInterval,
  isAfter,
  isBefore,
  isWithinInterval
} from 'date-fns'
import { ReservationDto } from '../../../api/models'

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
export type PriceDetail = { date: Date; price: number }
export type APIPriceData = { date: string; price: number | null }

export const DEFAULT_PRICE = 88

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
  guests: 1,
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

export function getNightBreakdown(prices: PriceDetail[], defaultPrice: number) {
  const defaultPriceNights = prices.filter(
    ({ price }) => price === (defaultPrice || 0)
  ).length

  return { defaultPriceNights }
}

export function generateNightlyPrices(
  prices: PriceDetail[],
  defaultPrice: number,
  from?: Date,
  to?: Date
): PriceDetail[] {
  if (!from || !to) return []

  const nights = eachDayOfInterval({ start: from, end: to })

  return nights.map((date) => {
    const matchingPrice = prices.find(
      (p) => p.date.getTime() === date.getTime()
    )

    return {
      date,
      price: matchingPrice ? matchingPrice.price : defaultPrice // Use default price if not found
    }
  })
}

export function groupNightsByPrice(priceDetails: PriceDetail[]) {
  if (!priceDetails.length) return []

  const groupedMap = new Map<number, number>()

  // Count occurrences of each price
  priceDetails.forEach(({ price }) => {
    groupedMap.set(price, (groupedMap.get(price) || 0) + 1)
  })

  // Convert to array format
  return Array.from(groupedMap.entries()).map(([price, nights]) => ({
    price,
    nights
  }))
}
