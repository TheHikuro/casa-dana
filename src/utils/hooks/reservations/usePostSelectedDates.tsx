import { supabase } from '../../api.ts'
import { useMutation } from '@tanstack/react-query'
import { ContactFormType } from '../../../pages/contact/_components'

export function usePostSelectedDates() {
  const { mutate } = useMutation({
    mutationFn: async (payload: ContactFormType) => {
      const { data, error } = await supabase
        .from('reservations')
        .insert(payload)
        .select()

      if (error) throw new Error(error.message)
      return data
    }
  })
  return { mutate }
}
