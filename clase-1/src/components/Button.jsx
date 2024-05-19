import React from 'react';
import { Button as MuiButton } from '@mui/material';

const Button = (props) => {
  return(
    <MuiButton onClick={props.handleClick} variant='contained'>  
      {props.children}
    </MuiButton>
  );
}
export default Button;