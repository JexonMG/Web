import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './Pages/App/App.jsx';
import './index.css';
import GuardiaPage from './Pages/Guardia/GuardiaPage';
import MonitorPage from './Pages/Monitor/MonitorPage';
import AdminPage from './Pages/Admin/AdminPage';
import EstudiantePage from './Pages/Estudiante/EstudiantePage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Guardia" element={<GuardiaPage />} />
        <Route path="/Monitor" element={<MonitorPage />} />
        <Route path="/Admin" element={<AdminPage />} />
        <Route path="/Estudiante" element={<EstudiantePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
