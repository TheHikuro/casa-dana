import './style/App.css'
import { Header } from './components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { ToastProvider } from './utils/providers/toaster.provider'
import { initAxiosInterceptors } from './api/axios.interceptors.ts'
import { RouterProvider } from 'react-router'
import { router } from '@/router'

function App() {
  const queryClient = new QueryClient()
  initAxiosInterceptors()
  return (
    <div className="App bg-_white">
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <RouterProvider router={router} />
          <Header />
          <Toaster />
        </ToastProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App
