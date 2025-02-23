import { ComponentPropsWithoutRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card.tsx'
import { Label } from './ui/label.tsx'
import { Input } from './ui/input.tsx'
import { Button } from './ui/button.tsx'
import { cn } from '../../@/lib/utils.ts'
import { useForm } from 'react-hook-form'
import { useToaster } from '../utils/providers/toaster.provider.tsx'
import { useNavigate } from 'react-router'
import { useIdentityStore } from '../pages/admin/admin.utils.ts'
import { usePostAuthLogin } from '../api/endpoints/auth/auth.ts'

type LoginFormType = {
  email: string
  password: string
}

type LoginResponse = {
  token: string
  email: string
}

export function LoginForm({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  const methods = useForm<LoginFormType>()
  const { handleSubmit, register } = methods
  const toaster = useToaster()
  const navigate = useNavigate()
  const { setIdentity } = useIdentityStore()
  const { mutate: auth } = usePostAuthLogin()

  const onSubmit = (data: LoginFormType) => {
    auth(
      {
        data: { ...data }
      },
      {
        onSuccess: ({ data }) => {
          setIdentity({
            isConnected: true,
            token: (data as unknown as LoginResponse).token,
            email: (data as unknown as LoginResponse).email
          })
          navigate('/admin')
        },
        onError: (error) => {
          toaster?.error(error.message)
        }
      }
    )
  }
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Authentification</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  {...register('email')}
                  placeholder="casa-dana@email.com"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Mot de passe: </Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  {...register('password')}
                  placeholder={'********'}
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
