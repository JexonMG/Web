import React from 'react';
import Typography from '@mui/material/Typography';

const Title = (props) => {
  console.log(props.mainTitle)
  return(
    <Typography variant="h3" style={{ backgroundColor: props.subtitle === 110 ? 'green' : 'red' }}gutterBottom>
      {props.mainTitle} - {props.subtitle}
    </Typography>
  );
}

export default Title;