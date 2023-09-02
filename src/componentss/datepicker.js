import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function Daterrrrr(props) {
  const {onChange} = props;
  return (
    <div style={{marginRight:'40px',marginBottom: '8px',marginLeft:'40px', width:'300px'}} >
    <LocalizationProvider dateAdapter={AdapterDayjs}  >
      <DatePicker className='bg-primary' onChange={onChange} />
    </LocalizationProvider>
    </div>
  );
}