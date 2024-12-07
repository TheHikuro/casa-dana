import { Input } from '../../../components/ui/input.tsx'
import { Button } from '../../../components/ui/button.tsx'
import { useForm } from 'react-hook-form'

type ContactFormType = {
  firstName: string
  lastName: string
  email: string
  phone: string
}

export function ContactForm() {
  const methods = useForm<ContactFormType>()
  const { register, handleSubmit } = methods

  const onSubmit = (data: ContactFormType) => {
    console.log(data)
  }

  return (
    <form
      className="grid grid-cols-2 gap-2 w-3/4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        placeholder="Firstname"
        className="rounded-full"
        {...register('firstName')}
      />
      <Input
        placeholder="Last Name"
        className="rounded-full"
        {...register('lastName')}
      />
      <Input
        placeholder="Email"
        className="rounded-full"
        {...register('email')}
      />
      <Input
        type="phone"
        placeholder="Phone"
        className="rounded-full"
        {...register('phone')}
      />
      <Button className="rounded-full col-span-2">Submit</Button>
    </form>
  )
}
