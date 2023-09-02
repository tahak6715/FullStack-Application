import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selectss(props) {
//   const [age, setAge] = React.useState('');

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

  const {value,onChange,SellItem,label} = props;

  return (
    <div>
      
      <FormControl variant="filled" style={{marginRight:'40px',marginBottom: '8px',marginLeft:'40px', width:'300px'}}  sx={{ minWidth: 300 }}>
        <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
        <Select className='bg-primary'
        
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled-label"
          value={SellItem}
          onChange={onChange}
        >
            {
                value.map((item,index) => (
                    <MenuItem
                    key={index}
                    value={item}>
                        {item}
                    </MenuItem>
                ))





            }
          
        </Select>
      </FormControl>
    </div>
  );
}