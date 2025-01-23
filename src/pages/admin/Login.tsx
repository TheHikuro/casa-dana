import { LoginForm } from '../../components/login-form.tsx'

export default function Login() {
  const BG =
    'https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  return (
    <div
      className={`flex justify-center items-center h-screen bg-cover bg-center`}
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className={'w-96'}>
        <LoginForm />
      </div>
    </div>
  )
}
