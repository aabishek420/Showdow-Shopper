import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import { BrowserRouter } from 'react-router-dom'
import MainHeader from './components/MainHeader.tsx'
import { CartProvider } from './context/CartContext.tsx'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";

        

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <BrowserRouter>
     <PrimeReactProvider>
      <CartProvider>
        <Navbar />
        <MainHeader />
        <App />
      </CartProvider>
      </PrimeReactProvider>
    </BrowserRouter>

  </StrictMode>,
)
