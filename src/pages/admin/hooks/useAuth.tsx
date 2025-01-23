import { supabase } from '../../../utils/api.ts'
import { useMutation } from '@tanstack/react-query'

export function useAuth() {
  const { mutate } = useMutation({
    mutationFn: async ({
      email,
      password
    }: {
      email: string
      password: string
    }) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) throw new Error(error.message)

      return data
    }
  })

  return { mutate }
}
