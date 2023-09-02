import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Buttonn from "../componentss/buttton";
import Raaadioos from "../componentss/buttttton";
import Daterrrrr from "../componentss/datepicker";
import Diss from "../componentss/desableinput";
import Inputt from "../componentss/input";
import Pswd from "../componentss/pswd";
import Selectss from "../componentss/select";
import { GetDataById, PostingOfData, signUpUser } from "../config/firebasemethods";



export default function Registeration({ isVisible }){

    // const nodeName = "Ttaha"

    // const [value,CurrentValue] = useState([]);

    // let GetDataOfForm = () => {
    //     GetDataById(nodeName)
    //     .then((res) => {
    //     //   console.log(value);
    //       CurrentValue([...res])
    //       console.log(value);
          
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   };

    //   useEffect(() => {
    //     GetDataOfForm();
    //  }, []);
    

    
        const [model,setModel] = useState({});
    
        let createUser = () => {
            signUpUser(model)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
        }
    
    // let SendFormDataaa = () => {
    //     const nodeName = "RegistrationForm"
    //     console.log(model)

    //    PostingOfData(nodeName, model)
    //         .then((res) => {
    //             console.log(res)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })

    // }

    

    return(
        
        <>

<div style={{ display: isVisible ? 'block' : 'none' }}>
      
          <Box sx={{textAlign:'center'}}>
                <h1 style={{color:'black' , fontFamily:'sans-serif',fontWeight:'500px', marginBottom:'30px', marginTop:'20px'}}>Registration Form </h1>
                <Box>
        <Inputt label="Student Name." onChange={(e)=> setModel({...model,StudentName: e.target.value})}/>
        <Inputt label="Father Name." onChange={(e)=> setModel({...model,FatherName: e.target.value})}/>
        </Box> 
        <Box>
        <Inputt label="Contact" onChange={(e)=> setModel({...model,StudentName: e.target.value})}/>
        <Inputt label="CNIC" onChange={(e)=> setModel({...model,StudentName: e.target.value})}/>
        </Box>
         <Box className="d-flex justify-content-center" >
            <Selectss label="Last Qualification" value={["Under Matric","Matric","Intermediate","Graduate"] } onChange={(e) => setModel({...model,InstituteType: e.target.value})} SellItem={model.InstituteType}/>
            <Selectss label="Cources" value={["Web Development","Metaverse World", "Chatbot Development"] } onChange={(e) => setModel({...model,Courcess: e.target.value})} SellItem={model.aa}/>
        </Box> 
             

        
        <Box className="d-flex justify-content-center">
        <Diss/>
        <Selectss label="Section" value={["Admin","Institute"] } onChange={(e) => setModel({...model,Section:e.target.value})} SellItem={model.Section}/>
        </Box>
        <Box className="d-flex justify-content-center">
            <Pswd type="Password" label="Password"  onChange={(e)=> setModel({...model,password: e.target.value})}/>
            <Pswd type="Email" label="Email"  onChange={(e)=> setModel({...model,email: e.target.value})}/>
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
            <Button onClick={createUser}> Submit </Button>
        </Box>
        
       
        </Box>
        {/* <Registeration isVisible={isVisible}/> */}
        
    </div>
        {/* <Button onClick={GetDataOfForm}>aa</Button>
        <h1>
            {value.map((item) => (
                <>
                <h1>{item.Name}</h1>
                
                </>
            ) )}
        </h1> */}
        
        </>
    );
}