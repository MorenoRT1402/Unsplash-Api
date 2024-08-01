import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './features/store.js'

import './styles/css/index.css'
import './styles/css/styles.css'
import { Header } from './components/Header.jsx'
import { MainBody } from './components/MainBody.jsx'
import { Footer } from './components/Footer.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>    
    <Provider store={store}>
      <Header />
      <MainBody />
      <Footer />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
