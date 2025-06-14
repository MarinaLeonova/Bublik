import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import React from 'react'
import { store } from '../src/app/store'
import { Provider } from 'react-redux'
import Routs from './Routs'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routs />
    </Provider>
  </React.StrictMode>,
)