import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

import './css/index.css'
import './css/styles.css'
import { Header } from './components/Header.jsx'
import { MainBody } from './components/MainBody.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <MainBody />
    </Provider>
  </React.StrictMode>,
)
