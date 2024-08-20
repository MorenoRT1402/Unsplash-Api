// import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import './styles/css/index.css'
import './styles/css/styles.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { store } from './app/store.js'
import { routes } from './app/config/routes.js'
import { FavGallery } from './components/pages/FavGallery.jsx'
import { HomeGallery } from './components/pages/HomeGallery.jsx'
import { Layout } from './components/pages/Layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
//  <React.StrictMode>
    <BrowserRouter>    
    <Provider store={store}>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeGallery />} />
            <Route path={routes.gallery} element={<FavGallery />} />
          </Route>
      </Routes>
    </Provider>
    </BrowserRouter>
//  </React.StrictMode>,
)
