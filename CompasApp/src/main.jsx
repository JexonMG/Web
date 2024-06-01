import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/Error/Error_page';
import data_base from '../data/data_base.json';
import Amigo_Page from './pages/Amigo_Page/Amigo_Page';


const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
];

data_base.friends.forEach((amigo) => {
  routes.push({
    path: amigo.name,
    element: <Amigo_Page amigo={amigo} />,
  });
});

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
