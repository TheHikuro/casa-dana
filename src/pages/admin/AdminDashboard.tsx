import { useIdentityStore } from './admin.utils.ts'

export default function AdminDashboard() {
  const { identity } = useIdentityStore()
  return (
    <div>
      <h1>Admin Dashboard {identity.email}</h1>
    </div>
  )
}
