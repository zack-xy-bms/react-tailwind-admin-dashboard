import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppWrapper } from '@/components/common/PageMeta.tsx'
import { ThemeProvider } from '@/context/ThemeContext.tsx'
import App from './App.tsx'
import './index.css'
import 'swiper/swiper-bundle.css'
import 'flatpickr/dist/flatpickr.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AppWrapper>
        <App />
      </AppWrapper>
    </ThemeProvider>
  </StrictMode>,
)
