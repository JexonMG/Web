import React, { useState, useEffect } from 'react';
import { Paper, Alert, Typography } from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import FriendDataForm from '../../components/FriendDataForm/FriendDataForm';
import FriendTable from '../../components/FriendTable/FriendTable';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import './styles.css';


const Home = () => {
  const [incompleteForm, setIncompleteForm] = useState({ message: '', severity: '' });
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [picture, setPicture] = useState('');
  const [isBestFriend, setIsBestFriend] = useState(false);
  const [datos, setDatos] = useState(null)
  const [snackBar, setsnackBar] = useState('');
  const [open, setOpen] = useState(false);

  // * Obtener los datos de la base de datos json-server
  useEffect(() => {
    fetch('http://localhost:8000/friends')
    .then(response =>{ return response.json()})
    .then(data => {setDatos(data)})
  },[])

  // * Borrar los datos de la tabla "datos"
  const borrarDatos =  () => {
    datos.length === 0 ? setAlert({ message: 'No hay datos para eliminar.', severity: 'error' }) :
    (setDatos([]),
    deleteAllFriends(),
    setIncompleteForm({ message: 'Datos eliminados con éxito.', severity: 'success' }))
  }

  // * Cerrar el snackbar
  const handleClose = () => {
    setOpen(false);
  };
  
  // ! Implementar la función deleteAllFriends, está incompleta
  const deleteAllFriends = (id) => {
    {datos.map((row) => (
    fetch(`http://localhost:8000/friends/${row.id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => console.log(data))
  ))}
  }

  // * Agregar un nuevo amigo a la base de datos json-server
  const addFriend = () => {
    fetch('http://localhost:8000/friends', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, nickname, picture, isBestFriend}),
    })
  }




  // * Guardar los datos en la base de datos json-server
  const guardar = () => {
    // * Verificar si el usuario ya se encuentra registrado
    const usuario = datos.find((usuario) => usuario.name === name)
    usuario ? setIncompleteForm({ message: 'El amigo ya se encuentra registrado', severity: 'error' }) :
    // * Verificar si los campos están vacíos
    name === '' || nickname === '' || picture === '' ? 
    setIncompleteForm({ message: 'Todos los campos son obligatorios', severity: 'error' }) 
    :
    (setDatos([...datos, {name, nickname, picture, isBestFriend}]),
    addFriend(),
    setsnackBar("Amigo guardo con éxito."),
    console.log(snackBar),
    setOpen(true),
    setName(''),
    setNickname(''),
    setPicture(''));
    // * Verificar si los campos están vacíos}
  
  }
  // * Estrucutra de la página
  return(
    <div>
      <NavBar />
      <PageWrapper>
        {incompleteForm.message && <Alert severity={incompleteForm.severity}>{incompleteForm.message}</Alert>}
        <Paper>
          <div className="home_wrapper">
            <Typography  sx={{ fontSize: 'clamp(16px, 3.5vw, 24px)' }} variant='h4'>Agregar Nuevo</Typography>
            {datos && <FriendDataForm guardar={guardar} name={name} setName={setName} nickname={nickname} setNickname={setNickname} picture={picture} setPicture={setPicture} isBestFriend={isBestFriend} setIsBestFriend={setIsBestFriend} borrarDatos= {borrarDatos}/>}
            {datos && <FriendTable datos= {datos} setDatos={setDatos}/>}
          </div>
        </Paper>
      </PageWrapper>
      {snackBar !== '' ? (
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          open={open}
          onClose={handleClose}
          message={snackBar}
          key="unique_key"
          className='snackbar'
          action={
            <Button color="inherit" size="small" onClick={handleClose}>
              X
            </Button>
          }
          ContentProps={{
            style: {
              backgroundColor: 'green'
            }
          }}
        />
      ) : null}
    </div>
  );
};

export default Home;