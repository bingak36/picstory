import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router.jsx'
import './index.scss'
import { AuthProvider } from './store/auth.store.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)
