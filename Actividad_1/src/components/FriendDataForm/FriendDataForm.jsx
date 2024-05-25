import React from 'react';
import { Button, FormGroup, FormControlLabel, TextField, Switch } from '@mui/material';

import './styles.css';

const FriendDataForm = ({guardar, name, setName, nickname, setNickname, picture, setPicture, isBestFriend, setIsBestFriend, borrarDatos} ) => {
  return(
    <div className="friend-data-form-wrapper">
      <div className='friend-data-form-text-fields'>
       <TextField id="outlined-basic" label="Foto" variant="outlined" value={name} onChange={(e) => setName(e.target.value)}/>
       <TextField id="outlined-basic" label="Sobrenombre" variant="outlined" value={nickname} onChange={(e) => setNickname(e.target.value)} /> 
       <TextField id="outlined-basic" label="Foto" variant="outlined" value={picture} onChange={(e) => setPicture(e.target.value)} />
      </div>
      <FormGroup>
        <FormControlLabel control={<Switch checked={isBestFriend} onChange={(e) => setIsBestFriend(e.target.checked)} />} label="Es mejor amigo" />
      </FormGroup>
      <div>
        <Button variant="contained" onClick={guardar}>Guardar</Button>
        <Button size='medium' variant='outlined' color="error" onClick={borrarDatos}>BORRAR DATOS</Button>
      </div>
    </div>
  );
}
export default FriendDataForm;