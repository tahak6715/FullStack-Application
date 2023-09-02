import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Inputt(props) {
  const {label,onChange} = props;
  return (
    
      
    <TextField className='bg-primary' style={{marginRight:'40px',marginBottom: '8px',marginLeft:'40px', width:'300px'}} id="filled-basic" label={label} variant="filled" onChange={onChange} />

    
  );
}