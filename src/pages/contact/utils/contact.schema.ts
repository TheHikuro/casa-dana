import * as z from 'zod'
import { CASADANA_KEYS } from '../../../i18n/keys/CASADANA_KEYS.ts'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const phoneRegex = /^\+\d{10,}$/

export const getContactSchema = (t: (key: string) => string) => {
  return z.object({
    firstname: z
      .string()
      .nonempty({ message: t(CASADANA_KEYS.errors.firstname_required) }),
    lastname: z
      .string()
      .nonempty({ message: t(CASADANA_KEYS.errors.lastname_required) }),
    email: z.string().regex(emailRegex, {
      message: t(CASADANA_KEYS.errors.invalid_email)
    }),
    phone: z
      .string()
      .regex(phoneRegex, { message: t(CASADANA_KEYS.errors.phone_required) }),
    description: z.string().optional()
  })
}
