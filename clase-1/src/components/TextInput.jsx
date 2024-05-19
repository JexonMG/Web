import React from 'react';
import TextField from '@mui/material/TextField';

const TextInput = (props) => {
  return(
    <TextField type='text' onChange={props.handleName} variant='outlined' />
  );
}
export default TextInput;