import './CardLogin.css';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, pink } from '@mui/material/colors';
import { Alert } from '@mui/material';
import { ConstructionOutlined } from '@mui/icons-material';

const theme = createTheme({
    palette: {
      primary: {
        main: blue[500],
      },
      secondary: {
        main: pink[500],
      },
    },
  });

export default function CardLogin({carnet, setCarnet, password, setPassword, alert, setAlert}) {
    console.log(carnet)
    console.log(password)
    
    return (
        <div className="Card-login">

            <ThemeProvider theme={theme}>

                <Paper className="paper-wrapper">
                    <div className="content-wrapper">
                        <Typography variant="h6">Iniciar Sesión</Typography>
                        {alert.message && <Alert severity={alert.severity}>{alert.message}</Alert>}
                        <TextField id="outlined-basic" label="Carnét" variant="standard" value={carnet} onChange={(e) => setCarnet(e.target.value)}/>
                        <TextField id="outlined-basic" label="Contraseña" variant="standard" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div className='bottomText-wrapper'>
                        <Typography sx={{ fontSize: '12px' }} align="center" fontWeight="bold">Olvide mi contraseña</Typography>
                    </div>

                    <div className="button-wrapper">
                        <Button  color='secondary' variant='contained' endIcon={<ArrowForwardIosIcon />}>ENTRAR</Button>
                    </div>

                </Paper>
                
            </ThemeProvider>

        </div>

    );
}
