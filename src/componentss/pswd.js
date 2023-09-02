import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Pswd(props) {

    const {type,label,onChange} = props;
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 0, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        
        
        <TextField className='bg-primary' style={{marginRight:'40px',marginBottom: '8px',marginLeft:'40px', width:'300px'}}
          id="filled-password-input"
          label={label}
          type={type}
          onChange={onChange}
          
          variant="filled"
        />

        </div>
        
      
        
        
    </Box>
  );
}