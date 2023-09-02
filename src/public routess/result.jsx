import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Inputt from "../componentss/input";
import Buttonnyyy from "../componentss/searchbtn";
import Selectss from "../componentss/select";

export default function Result(){
    const [model,setModel] = useState({});
    let sendingOfFormData = () => {
        console.log(model);
    }
    return(
        <>
        <Box sx={{textAlign:'center'}} style={{margin:'40px'}} >
        <Box>
            <h1>Result</h1>
        </Box>
        <Box >
        <Inputt  label="Roll No.." onclick={(e)=> setModel({...model,StudentName: e.target.value})}/>
        <Selectss label="Cources" value={["Web Development","Metaverse World", "Chatbot Development"] } onChange={(e) => setModel({...model,Courcess:e.target.value})} SellItem={model.aa}/>


        </Box>
        <Button onClick={sendingOfFormData}>Search</Button>
        </Box>
        
        </>
    );
}