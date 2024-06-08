import { useState, useEffect } from 'react'
import './App.css'
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import TitleLogin from '../../components/Title/TitleLogin';
import CardLogin from '../../components/Card/CardLogin';


function App() {
  const [alert, setAlert] = useState({ message: '', severity: '' });
  const [carnet, setCarnet] = useState('');
  const [password, setPassword] = useState('');
  const [estudiantes, setEstudiantes] = useState(null);
  const [monitores, setMonitores] = useState(null);
  const [guardias, setGuardias] = useState(null);
  const [Admin, setAdmin] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/estudiantes')
    .then(response =>{ return response.json()})
    .then(data => {setEstudiantes(data)})
  },[])

  useEffect(() => {
    fetch('http://localhost:8000/guardias')
    .then(response =>{ return response.json()})
    .then(data => {setGuardias(data)})
  },[])

  useEffect(() => {
    fetch('http://localhost:8000/monitores')
    .then(response =>{ return response.json()})
    .then(data => {setMonitores(data)})
  },[])

  useEffect(() => {
    fetch('http://localhost:8000/Admin')
    .then(response =>{ return response.json()})
    .then(data => {setAdmin(data)})
  },[])


  return (
    <div className="App">
        <TitleLogin />
        <PageWrapper>
            <CardLogin carnet= {carnet} setCarnet ={setCarnet} password= {password} setPassword={setPassword} alert = {alert} setAlert={setAlert}/>
        </PageWrapper>
    </div>
  )
}

export default App
