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
//Shawncito, 

function App() {
  return (
    <div>
      <Grid>
        <BarraDeApp/>
        <div className='Main'>
        <Card>
          <Typography>
            <h3>Agregar nuevo</h3>
          </Typography>
            <TextField label='Nombre' variant='outlined'/>
            <TextField label='Sobrenombre' variant='outlined'/>
            <TextField label='Foto' variant='outlined'/>
          <Stack direction='row'>
            <Switch/>
            <FormLabel>Es mejor amigo</FormLabel>
          </Stack>
          <Stack>
            <Button size='small' variant='contained'>GUARDAR</Button>
            <BasicTable/>
            </Stack>
        </Card>
        </div>
      </Grid>
    </div>
  )
}

export default App