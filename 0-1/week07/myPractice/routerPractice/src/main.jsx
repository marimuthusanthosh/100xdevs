import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './AppContext.jsx'
import AppRouter from './AppRouter.jsx'
import AppPropDrilling from './AppPropDrilling.jsx'
import AppContext from './AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppRouter/> */}
    {/* <AppPropDrilling/> */}
    <AppContext/>
    
  </StrictMode>,
)
