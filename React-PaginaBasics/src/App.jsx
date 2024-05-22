import './App.css'
import { TwiterFollowCard } from './assets/TwiterFollowCard'
import Paper  from '@mui/material/Paper'
import Toolbar from '@mui/material/Toolbar'
import IconButton  from '@mui/material/IconButton'
import  Icon  from '@mui/material/Icon'
import  Typography  from '@mui/material/Typography'
import Card from '@mui/material/Card'
import MenuIcon from '@mui/material/Menu'
import  Grid  from '@mui/material/Grid'
import  Snackbar  from '@mui/material/Snackbar'
import SnackbarContent from '@mui/material/SnackbarContent'
import Stack from '@mui/material/Stack'
import Input from '@mui/material/Input'
import { Button, Switch, TextField } from '@mui/material'
import FormLabel from '@mui/material/FormLabel'
import Table from '@mui/material/Table'
import BasicTable from './assets/Table'
import BarraDeApp from './assets/BarraDeApp'
import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert'
import AlertMessage from './assets/AlertMessage'
import Box from '@mui/material/Box'


function App() {
  // * Hooks de estado
  const [nombre, setnombre] = useState('')
  const [sobrenombre, setsobrenombre] = useState('')
  const [foto, setfoto] = useState('')
  const [checked, setChecked] = useState(false);
  const [datos, setDatos] = useState([])
  const [alert, setAlert] = useState({ message: '', severity: '' });

  // * Función para actualizar los inputs en el estado
  const handleChange = (setTextValue) => (event) => {
    setTextValue(event.target.value);
    setAlert({ message: '', severity: '' })
  };

  // * Función para actualizar el estado del switch
  const handleChangeSwitch = (event) => {
    setChecked(event.target.checked);
  };

  // TODO: Implementar funcion para verificar si usuario ya se encuentra registrado
  // * CHECKED
  
  // TODO: Implementar funcion para guardar datos en localStorage
  // 

  // TODO: Implementar funcion para eliminar usuarios de la tabla




  // * Función para guardar los datos en el estado
  const guardar = () => {
    // * Verificar si el usuario ya se encuentra registrado
    const usuario = datos.find((usuario) => usuario.nombre === nombre)
    usuario ? setAlert({ message: 'El usuario ya se encuentra registrado', severity: 'error' }) :

    // * Verificar si los campos están vacíos
    nombre === '' || sobrenombre === '' || foto === '' ? 
    setAlert({ message: 'Todos los campos son obligatorios', severity: 'error' }) 
    :
    (setDatos([...datos, {nombre, sobrenombre, foto, mejorAmigo: checked}]),
    setAlert({ message: 'Datos guardados.', severity: 'success' })) 
  }
  
  // ! Mejorar sintaxis de JSX haciendo multiples componentes
  // * Estrucutra de la aplicación
  return (
    <div>
      <Grid>
        <BarraDeApp/>
        <div className='Main' style={{ padding: '20px' }}>
        <Card >
          {alert.message && <AlertMessage message={alert.message} severity={alert.severity} />}
          <Typography>
            <h3>Agregar nuevo</h3>
            </Typography>
            <Stack spacing={6} direction= "row">
              <TextField label='Nombre' variant='outlined' value={nombre} onChange={handleChange(setnombre)}/>
              <TextField label='Sobrenombre' variant='outlined' value={sobrenombre} onChange={handleChange(setsobrenombre)}/>
              <TextField label='Usuario de GitHub' variant='outlined' value={foto} onChange={handleChange(setfoto)}/>

            </Stack> 
          <Stack direction="row" spacing={1} alignItems="center">
            <Switch onChange={handleChangeSwitch}/>
            <FormLabel>¿Es mejor amigo?</FormLabel>
          </Stack>
          <Stack spacing={2} >
            <Box sx={{ width: 'auto' }} >
              <Button size='medium' variant='contained' onClick={guardar}>GUARDAR</Button>
            </Box>
            <BasicTable value= {datos}/>
            </Stack>
        </Card>
        </div>
      </Grid>
    </div>
  )
}

export default App