import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='fixed inset-0 bg-black text-white'>
      <App />
    </div>
  </StrictMode>,
)
