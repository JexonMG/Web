import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './Pages/App/App.jsx'
import './index.css'
import GuardiaPage from './Pages/Guardia/GuardiaPage'
import MonitorPage from './Pages/Monitor/MonitorPage'
import AdminPage from './Pages/Admin/AdminPage'

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Guardia",
    element: <GuardiaPage />,
  },
  {
    path: "/Monitor",
    element: <MonitorPage />,
  },
  {
    path: "/Admin",
    element: <AdminPage />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
