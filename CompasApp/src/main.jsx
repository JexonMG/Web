import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/Error/Error_page';
import data_base from '../data/data_base.json';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

data_base.forEach((amigo) => {
  router.push({
    path: amigo.nombre,
    element: element,
  });
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
