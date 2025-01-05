import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import './style/App.css'
import { Header } from './components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient()
  return (
    <div className="App bg-_white">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  )
}

export default App
