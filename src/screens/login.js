import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as bootstrap from "bootstrap/dist/js/bootstrap.js";
import Button from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { LoginUser } from "../config/firebasemethods";
import { useNavigate } from "react-router-dom";



function Login(){
    const [model, setModel] = useState({});

    const navigation = useNavigate();

    let SignIn = () => {
        LoginUser(model)
        .then((res) => {
            console.log(res);
            if(res.Section === 'Admin'){
                navigation("/admin")

            }
            if(res.Section === 'Institute'){
                navigation("/institute")
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return(
        <>
        
        <Box sx={{height:"100vh"}} className="d-flex justify-content-center align-items-center flex-column">
            <Box className="p-2">
            <Typography variant="h3">Login</Typography>
            </Box>
            <Box className="p-2">
            <TextField onChange={(e) => setModel({...model, email:e.target.value})} variant="standard" label='Email'/>
            </Box>
            <Box className="p-2">
            <TextField onChange={(e) => setModel({...model, password:e.target.value})} variant="standard" label='Password'/>
            </Box>
            <Box className="p-3">
            <button onClick={SignIn} type="button" class="btn btn-primary px-5">Login</button>

                {/* <Button variant="contained">abc</Button> */}
            </Box>

        </Box>
        
        
        </>

    );
}

export default Login;