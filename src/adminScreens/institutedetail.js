import { useLocation, useParams } from "react-router-dom";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import Avatar from '@mui/material/Avatar';

export default function Institute_detail(){
    const {state} = useLocation();

    const [value,CurrentValue] = useState([])
    
    const{obj}=state
    
    let Detail =()=>{
        CurrentValue(obj)
    }


        
  React.useEffect(() => {
 Detail();
  }, []);


    console.log(obj)
    return(
        <>

        <h1>{obj.InstituteName}</h1>

//         <Box>

// <Box sx={{display:"flex"}}>

// {/* <Avatar
//   alt="Remy Sharp"
//   src={obj.LogoLink}
//   sx={{ width: 156, height: 156 }}
// /> */}

// <Box sx={{display:"flex" }} my={'auto'}>

// <Typography variant="h3" component="h2">
//   {obj.InstituteName} 
// </Typography>

// <Typography variant="h5" component="h2">
//   {obj.InstituteShortName} 
// </Typography>
// </Box>
//   </Box>
//   <Typography variant="h5" component="h2">
//   {obj.CampusDetail} 
// </Typography>

// <Typography variant="h5" component="h2">
//  Adress: {obj.Adress} 
// </Typography>

// <Typography variant="h5" component="h2">
//  Type: {obj.UserType} 
// </Typography>
// <Typography variant="h5" component="h2">
//  Number of campus: {obj.NumberOfCampus} 
// </Typography>


// </Box>

</>

    )
}
