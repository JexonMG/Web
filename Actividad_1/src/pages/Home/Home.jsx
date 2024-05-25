import React, { useState } from 'react';
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
  const [datos, setDatos] = useState([])
  const [snackBar, setsnackBar] = useState('');
  const [open, setOpen] = useState(false);

  

  const borrarDatos = () => {
    datos.length === 0 ? setAlert({ message: 'No hay datos para eliminar.', severity: 'error' }) :
    (setDatos([]),
    setIncompleteForm({ message: 'Datos eliminados con éxito.', severity: 'success' }))
  }

  const handleClose = () => {
    setOpen(false);
  };

  const guardar = () => {
    // * Verificar si los campos están vacíos
    name === '' || nickname === '' || picture === '' ? 
    setIncompleteForm({ message: 'Todos los campos son obligatorios', severity: 'error' }) 
    :
    (setDatos([...datos, {name, nickname, picture, mejorAmigo: isBestFriend}]),
    setsnackBar("Amigo guardo con éxito."),
    console.log(snackBar),
    setOpen(true));
    // * Verificar si los campos están vacíos}

  }
  return(
    <div>
      <NavBar />
      <PageWrapper>
        {incompleteForm.message && <Alert severity={incompleteForm.severity}>{incompleteForm.message}</Alert>}
        <Paper>
          <div className="home_wrapper">
            <Typography variant='h4'>Agregar Nuevo</Typography>
            <FriendDataForm guardar={guardar} name={name} setName={setName} nickname={nickname} setNickname={setNickname} picture={picture} setPicture={setPicture} isBestFriend={isBestFriend} setIsBestFriend={setIsBestFriend} borrarDatos= {borrarDatos}/>
            <FriendTable datos= {datos} setDatos={setDatos}/>
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