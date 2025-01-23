export const normalizeDate = (date: Date) => {
  const normalized = new Date(date)
  normalized.setHours(0, 0, 0, 0)
  return normalized
}

export function formatToDate(date: string) {
  const [day, month, year] = date.split('/')
  const formatedDate = new Date(`${year}-${month}-${day}`)
  if (isNaN(formatedDate.getTime())) return new Date()
  return formatedDate
}
