import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar'
import Note from './components/Note/Note.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element: <Layout/>,
    children: [
      {
        path:"",
        element: <Note/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
