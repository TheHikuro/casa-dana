import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './style/index.css'
import './i18n/config/i18n.config'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
