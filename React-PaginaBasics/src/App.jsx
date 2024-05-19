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

//Shawncito, 

function App() {
  const [nombre, setnombre] = useState('')
  const [sobrenombre, setsobrenombre] = useState('')
  const [foto, setfoto] = useState('')
  const [checked, setChecked] = useState(false);
  const [datos, setDatos] = useState([])

  const handleChange = (setTextValue) => (event) => {
    setTextValue(event.target.value);
  };

  const handleChangeSwitch = (event) => {
    setChecked(event.target.checked);
  };

  const guardar = () => {
    nombre === '' || sobrenombre === '' || foto === '' ? alert('Faltan datos') :
    setDatos([...datos, {nombre, sobrenombre, foto, mejorAmigo: checked}])
  }

  console.log( nombre)
  console.log(sobrenombre)
  console.log(foto)
  console.log(checked)

  return (
    <div>
      <Grid>
        <BarraDeApp/>
        <div className='Main' style={{ padding: '20px' }}>
        <Card>
          <Typography>
            <h3>Agregar nuevo</h3>
            </Typography>
          <div className='Main'>
              <TextField label='Nombre' variant='outlined' value={nombre} onChange={handleChange(setnombre)}/>
              <TextField label='Sobrenombre' variant='outlined' value={sobrenombre} onChange={handleChange(setsobrenombre)}/>
              <TextField label='Foto' variant='outlined' value={foto} onChange={handleChange(setfoto)}/>

          </div>  
          <Stack direction="row" spacing={1} alignItems="center">
            <Switch onChange={handleChangeSwitch}/>
            <FormLabel>¿Es mejor amigo?</FormLabel>
          </Stack>
          <Stack spacing={2}>
            <Button size='small' variant='contained' onClick={guardar}>GUARDAR</Button>
            <BasicTable value= {datos}/>
            </Stack>
        </Card>
        </div>
      </Grid>
    </div>
  )
}

export default App