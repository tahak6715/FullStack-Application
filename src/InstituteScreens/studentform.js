import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Buttonn from "../componentss/buttton";
import Raaadioos from "../componentss/buttttton";
import Daterrrrr from "../componentss/datepicker";
import Diss from "../componentss/desableinput";
import Inputt from "../componentss/input";
import Pswd from "../componentss/pswd";
import Selectss from "../componentss/select";
import { PostingOfData } from "../config/firebasemethods";



export default function StudentForm(){
    const [model,setModel] = useState({});
    let SendFormDataaa = () => {
        const nodeName = "StudentForm"
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
        <div className="bg-dark" style={{margin:'-10px'}}>
        <Box sx={{textAlign:'center'}}>
                <h1 className="text-primary" style={{fontFamily:'sans-serif',fontWeight:'500px', marginBottom:'30px', paddingTop:'20px'}}>Registration Form </h1>
                <Box>
        <Inputt  label="Student Name." onChange={(e)=> setModel({...model,StudentName: e.target.value})}/>
        <Inputt label="Father Name." onChange={(e)=> setModel({...model,FatherName: e.target.value})}/>
        </Box> 
        <Box>
        <Inputt label="Contact" onChange={(e)=> setModel({...model,Contact: e.target.value})}/>
        <Inputt label="CNIC" onChange={(e)=> setModel({...model,CNIC: e.target.value})}/>
        </Box>
         <Box className="d-flex justify-content-center" >
            <Selectss label="Last Qualification" value={["Under Matric","Matric","Intermediate","Graduate"] } onChange={(e) => setModel({...model,LastQualifictaion: e.target.value})} SellItem={model.InstituteType}/>
            <Selectss label="Cources" value={["Web Development","Metaverse World", "Chatbot Development"] } onChange={(e) => setModel({...model,Courcess: e.target.value})} SellItem={model.aa}/>
        </Box> 
             

        
        <Box className="d-flex justify-content-center">
        <Diss/>
        <Selectss label="Section" value={["Section A","Section B","Section C"] } onChange={(e) => setModel({...model,Section:e.target.value})} SellItem={model.Section}/>
        </Box>
        <Box className="d-flex justify-content-center">
            <Pswd type="Password" label="Password"  onChange={(e)=> setModel({...model,Password: e.target.value})}/>
            <Pswd type="Email" label="Email"  onChange={(e)=> setModel({...model,Email: e.target.value})}/>
        </Box>
        <Box className="d-flex justify-content-center">
        <Selectss label="City" value={["Karachi","Lahore","Islamabad"] } onChange={(e) => setModel({...model,City:e.target.value})} SellItem={model.City}/>
        <Selectss label="Country" value={["Pakistan","India","Canada"] } onChange={(e) => setModel({...model,Country:e.target.value})} SellItem={model.Country}/>
        </Box>
        <Box className="d-flex justify-content-center">
            <Daterrrrr onChange={(e)=> setModel({...model,Date: e.target.value})}/>
            <Inputt label="Address" onChange={(e)=> setModel({...model,Address: e.target.value})}/>

        </Box>
        <Box className="d-flex justify-content-center my-4">
        <Raaadioos/>
            
        </Box >
        <Box>
            <Button style={{marginBottom:'20px'}} className="bg-primary text-dark py-2 px-5 " onClick={SendFormDataaa}> Submit </Button>
        </Box>
        
       
        </Box>
        </div>
        </>
    );
}