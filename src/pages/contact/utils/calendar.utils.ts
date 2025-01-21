export const normalizeDate = (date: Date) => {
  const normalized = new Date(date)
  normalized.setHours(0, 0, 0, 0)
  return normalized
}

export function formatToDate(date: string) {
  const [day, month, year] = date.split('/')
  return new Date(`${year}-${month}-${day}`)
}
