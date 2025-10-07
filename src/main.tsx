import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext.tsx'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import { ToastContainer } from "react-toastify";
        

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<ToastContainer position="top-right" autoClose={2000} theme="colored" />
    <BrowserRouter>
     <PrimeReactProvider>
      <CartProvider>
        <Navbar />
        <App />
      </CartProvider>
      </PrimeReactProvider>
    </BrowserRouter>

  </StrictMode>,
)
