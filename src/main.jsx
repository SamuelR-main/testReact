import React from 'react'
import ReactDOM from 'react-dom/client'
import AppHome from './pages/Home/index-home'
import GlobalStyles from './styles/global-styles'
import AppRoutes from './routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppHome />
    <GlobalStyles />
  </React.StrictMode>
)
