import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import './style/App.css'
import { Header } from './components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { ToastProvider } from './utils/providers/toaster.provider'

function App() {
  const queryClient = new QueryClient()
  return (
    <div className="App bg-_white">
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <BrowserRouter>
            <Header />
            <Router />
            <Toaster />
          </BrowserRouter>
        </ToastProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App
