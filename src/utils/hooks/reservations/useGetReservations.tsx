import { useQuery } from '@tanstack/react-query'
import { supabase } from '../../api.ts'

export function useGetReservations() {
  const {
    data: reservations,
    error,
    status
  } = useQuery({
    queryKey: ['reservations'],
    queryFn: async () => {
      const { data, error } = await supabase.from('reservations').select('*')

      if (error) throw new Error(error.message)
      return data
    },
    refetchOnWindowFocus: true
  })

  return { reservations, error, status }
}
