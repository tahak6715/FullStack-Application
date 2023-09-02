import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Inputt from "../componentss/input";
import { PostingOfData } from "../config/firebasemethods";

export default function CourseForm(){
    const [model,setModel] = useState({});
    let SendFormDataaa = () => {
        const nodeName = "CourseFormy"
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
        <Box sx={{textAlign:'center'}}>
                <h1 style={{color:'black' , fontFamily:'sans-serif',fontWeight:'500px', marginBottom:'30px', marginTop:'20px'}}>User Register </h1>
                <Box className="d-flex justify-content-center">
        <Inputt label="Course Name." onChange={(e)=> setModel({...model,CourseName: e.target.value})}/>
        <Inputt label="Duration." onChange={(e)=> setModel({...model,Duration: e.target.value})}/>
        </Box> 
        <Box className="d-flex justify-content-center">
        <Inputt label="Fees." onChange={(e)=> setModel({...model,fees: e.target.value})}/>
        <Inputt label="Teacher." onChange={(e)=> setModel({...model,Teacher: e.target.value})}/>
        </Box>
        <Box>
            <Button onClick={SendFormDataaa}>Submit Form</Button>
        </Box>
        </Box>
        
        </>
    );
}