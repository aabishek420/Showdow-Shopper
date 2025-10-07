import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import { BrowserRouter } from 'react-router-dom'
import MainHeader from './components/MainHeader.tsx'
import { CartProvider } from './context/CartContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <CartProvider>
    <BrowserRouter>
      <Navbar />
      <MainHeader />
      <App />
    </BrowserRouter>
    </CartProvider>
  </StrictMode>,
)
