import { useMutation } from '@tanstack/react-query'
import { supabase } from '../../../utils/api.ts'

export function useUpdateReservation() {
  const { mutate } = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: boolean }) => {
      const { data, error } = await supabase
        .from('reservations')
        .update({
          status
        })
        .eq('id', id)

      if (error) throw new Error(error.message)

      return data
    }
  })

  return { mutate }
}
