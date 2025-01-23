import { useMutation } from '@tanstack/react-query'
import { supabase } from '../../../utils/api.ts'

export function useDeleteReservation() {
  const { mutate } = useMutation({
    mutationFn: async ({ id }: { id: string }) => {
      const { data } = await supabase.from('reservations').delete().eq('id', id)

      return data
    }
  })

  return { mutate }
}
