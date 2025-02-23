import { lazy, Suspense } from 'react'
import { createBrowserRouter, Navigate, Outlet } from 'react-router'
import { HomeSkeleton } from '@/components'
import { useIdentityStore } from '../pages/admin/admin.utils'

const Home = lazy(() => import('../pages/home/Home'))
const LoginPage = lazy(() => import('../pages/admin/Login'))
const AdminDashboardPage = lazy(() => import('../pages/admin/AdminDashboard'))

const ProtectedRoute = ({ redirect }: { redirect: string }) => {
  const {
    identity: { isConnected }
  } = useIdentityStore()
  return isConnected ? <Outlet /> : <Navigate to={redirect} replace />
}

export const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<HomeSkeleton />}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        element: <ProtectedRoute redirect="/login" />,
        children: [
          {
            path: '/admin',
            element: <AdminDashboardPage />
          }
        ]
      }
    ]
  }
])
