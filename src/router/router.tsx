import { Fragment, PropsWithChildren, Suspense, lazy } from 'react'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import { HomeSkeleton } from '../components/home-skeleton'

const Home = lazy(() => import('../pages/home/Home'))

interface ProtectedRouteProps extends PropsWithChildren {
  redirect: string
  condition: boolean
}

/**
 * This is a TypeScript React function that renders children if a condition is met, otherwise it
 * redirects to a specified route.
 * @param {ProtectedRouteProps}  - - `redirect`: the path to redirect to if the `condition` is false
 * @returns The `ProtectedRoute` component is being returned. If the `condition` prop is true, it will
 * render the `children` prop wrapped in a `React.Fragment`. If the `condition` prop is false, it will
 * render a `Navigate` component with the `to` prop set to the `redirect` prop.
 */
const ProtectedRoute = ({
  redirect,
  condition,
  children
}: ProtectedRouteProps) => {
  if (condition)
    return (
      <Fragment>
        <Suspense fallback={<HomeSkeleton />}>{children}</Suspense>
      </Fragment>
    )
  else return <Navigate to={redirect} />
}

export function Router() {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute condition={true} redirect="/">
            <Outlet />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
