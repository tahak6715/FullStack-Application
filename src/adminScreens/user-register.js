import { Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Inputt from "../componentss/input";
import Selectss from "../componentss/select";
import ColorThemeController from "./color-theme";

export default function UserRegisterr(){
    const [model,setModel] = useState({});
    let Data = () => {
      console.log(model);
    }
    return(
        <>
        <div className="bg-dark text-primary" style={{minHeight:'538px', margin:'-10px'}}>
        <Box sx={{textAlign:'center'}}>
                <h1 className="text-primary" style={{ fontFamily:'sans-serif',fontWeight:'500px', marginBottom:'30px', paddingTop:'20px'}}>User Register </h1>
                <Box className="d-flex justify-content-center">
        <Inputt label="Name." onChange={(e)=> setModel({...model,Name: e.target.value})}/>
        <Inputt label="Email" onChange={(e)=> setModel({...model,Email: e.target.value})}/>
        </Box> 
        <Box className="d-flex justify-content-center">
        <Inputt label="Password" onChange={(e)=> setModel({...model,Password: e.target.value})}/>
        <Inputt label="CNIC" onChange={(e)=> setModel({...model,Cnic: e.target.value})}/>
        </Box>
        <Box className="d-flex justify-content-center">
        <Selectss label="User Type" value={["Admin","Student","Teacher","Institute"] } onChange={(e) => setModel({...model,UserType: e.target.value})} SellItem={model.UserTypeInstituteType}/>
        </Box>
        <Box>
          <Button  style={{marginBottom:'20px'}} className="bg-primary text-dark py-2 px-5 my-4 " onClick={Data}>Register</Button>
        </Box>
        </Box>

        </div>

        
        </>
    );

}