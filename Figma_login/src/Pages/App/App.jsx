import { useState } from 'react';
import './App.css';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import TitleLogin from '../../components/Title/TitleLogin';
import CardLogin from '../../components/Card/CardLogin';
import credentials from '../../../data/data_base.json';
import { useNavigate } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState({ message: '', severity: '' });
  const [carnet, setCarnet] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = credentials.find(
      (user) => user.username === carnet && user.password === password
    );

    if (user) {
      switch (user.role) {
        case 'Admin':
          navigate('/Admin');
          break;
        case 'Estudiante':
          navigate('/Estudiante');
          break;
        case 'Monitor':
          navigate('/Monitor');
          break;
        case 'Guarda':
          navigate('/Guardia');
          break;
        default:
          setAlert({ message: 'Rol desconocido', severity: 'error' });
      }
    } else {
      setAlert({ message: 'Credenciales inválidas', severity: 'error' });
    }
  };

  return (
    <div className="App">
      <TitleLogin />
      <PageWrapper>
        <CardLogin 
          carnet={carnet} 
          setCarnet={setCarnet} 
          password={password} 
          setPassword={setPassword} 
          alert={alert} 
          setAlert={setAlert}
          handleLogin={handleLogin}
        />
      </PageWrapper>
    </div>
  );
}

export default App;
