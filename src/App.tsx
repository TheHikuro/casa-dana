import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import './style/App.css'
import { Header } from './components/header'

function App() {
  return (
    <div className="App bg-_white">
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App
