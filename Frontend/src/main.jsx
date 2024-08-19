import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StoreContextProvider from './context/StoreContext.jsx'
import {Provider} from 'react-redux'
import {
  BrowserRouter,
} from "react-router-dom";
import food_store from './Store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={food_store}>
     <StoreContextProvider>
         <App />
    </StoreContextProvider>
    </Provider>
  </BrowserRouter>
 
)
