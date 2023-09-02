import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Diss() {
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
        
        <TextField className='bg-primary'
        style={{marginRight:'40px',marginBottom: '8px',marginLeft:'40px', width:'300px'}}
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Cubix Software House"
          variant="filled"
        />
        
      </div>
    </Box>
  );
}