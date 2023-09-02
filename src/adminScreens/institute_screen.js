import { FormControl, InputLabel, MenuItem, Select,Paper, TextField, Box, Button } from "@mui/material";

import { useEffect, useState } from "react";
import Inputt from "../componentss/input";
import Selectss from "../componentss/select";
import { PostingOfData } from "../config/firebasemethods";
import { useLocation } from "react-router-dom";




export default function Innstitute_screen(){
    
    const [model,setModel] = useState({});

    const {state} = useLocation();
   
 
    useEffect(() => {
        
        if(state){
            const {obj} = state
            
            setModel(obj)
            
        }
    }, []);
    let SendFormDataaay = () => {
        const nodeName = "InstituteForm"
        console.log(model)

       PostingOfData(nodeName, model)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })

    }
    return(
        <>
        <div className="bg-dark text-dark" style={{height:'538px', margin:'-10px'}}>
        
        <Box sx={{textAlign:'center'}}>
                <h1 className="text-primary headd" style={{ fontFamily:'sans-serif',fontWeight:'500px', marginBottom:'30px', paddingTop:'20px'}}>Institute Form </h1>
                <Box className="d-flex justify-content-center">
        <Inputt label="Institute Name." onChange={(e)=> setModel({...model,InstituteName: e.target.value})}/>
        <Inputt label="Institute Short Name." onChange={(e)=> setModel({...model,InstituteSName: e.target.value})}/>
        </Box> 
        <Box className="d-flex justify-content-center">
        <Inputt label="Logo Image." onChange={(e)=> setModel({...model,LogoImage: e.target.value})}/>
        <Inputt label="No Of Campuses." onChange={(e)=> setModel({...model,NoOfCampuses: e.target.value})}/>
        </Box>
        <Box className="d-flex justify-content-center">
        <Inputt label="Campus Detail." onChange={(e)=> setModel({...model,DetailOfCampus: e.target.value})}/>
        <Inputt label="Location." onChange={(e)=> setModel({...model,Location: e.target.value})}/>
        </Box>
        <Box className="d-flex justify-content-center">
        <Inputt label="Address." onChange={(e)=> setModel({...model,Address: e.target.value})}/>
        <Inputt label="Contact." onChange={(e)=> setModel({...model,Contact: e.target.value})}/>
        </Box>
        <Box className="d-flex justify-content-center">
        <Inputt label="Owner Contact" onChange={(e)=> setModel({...model,OContact: e.target.value})}/>
        <Inputt label="Owner Email. " onChange={(e)=> setModel({...model,OEmail: e.target.value})}/>
        </Box>
        <Box className="d-flex justify-content-center" >
            <Selectss label="User Type" value={["Institute"] } onChange={(e) => setModel({...model,UserType: e.target.value})} SellItem={model.UserTypeInstituteType}/>
            <Selectss label="Institute Type" value={["School","College", "University", "Institute"] } onChange={(e) => setModel({...model,InstituteType: e.target.value})} SellItem={model.InstituteType}/>
        </Box> 
        <Box className="d-flex justify-content-center">
        <Button style={{marginBottom:'20px'}} className="bg-primary text-dark py-2 px-5 my-2" onClick={SendFormDataaay} > Submit</Button>
        </Box>

        </Box>

        </div>

        

        
   

    </>
        
        
    );
}