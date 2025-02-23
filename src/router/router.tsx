import { lazy, Suspense } from 'react'
import { createBrowserRouter, Navigate, Outlet } from 'react-router'
import { HomeSkeleton } from '@/components'
import { useIdentityStore } from '../pages/admin/admin.utils'
import { MemoizedLayout } from '@/pages/admin/layout/layout.tsx'

const Home = lazy(() => import('../pages/home/Home'))
const LoginPage = lazy(() => import('../pages/admin/Login'))
const ReservationsAdmin = lazy(
  () => import('../pages/admin/contents/reservations/ReservationsAdmin.tsx')
)

const ProtectedRoute = ({ redirect }: { redirect: string }) => {
  const {
    identity: { isConnected }
  } = useIdentityStore()
  return isConnected ? (
    <MemoizedLayout>
      <Outlet />
    </MemoizedLayout>
  ) : (
    <Navigate to={redirect} replace />
  )
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
            path: 'admin',
            element: <ReservationsAdmin />
          }
        ]
      }
    ]
  }
])
