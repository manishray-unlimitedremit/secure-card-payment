import React from 'react'
import { createRoot } from 'react-dom/client'

import router from './router.jsx'

import {RouterProvider} from "react-router-dom"
import { ContextProvider } from './context/ContextProvider.jsx'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <ContextProvider>
        <RouterProvider router={router}/>

        </ContextProvider>


  </React.StrictMode>,


)
