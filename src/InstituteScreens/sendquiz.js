import React, { useState } from "react";
import Inputt from "../componentss/input";
import { Button } from "@mui/material";
import { GetDataById, PostingOfData } from "../config/firebasemethods";
import { TextFields } from "@mui/icons-material";

export default function SendQuiz(){

    const [model,setModel] = useState([]);

   

   

    

    let SendFormDataaay = () => {
        const nodeName = "JavaaScript"
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

<Inputt  label="Question" onChange={(e)=> setModel({...model,Question: e.target.value})}/>



<Inputt label="OptionA" onChange={(e)=> setModel({...model,OptionA: e.target.value})}/>
<Inputt label="OptionB" onChange={(e)=> setModel({...model,OptionB: e.target.value})}/>
<Inputt label="OptionC" onChange={(e)=> setModel({...model,OptionC: e.target.value})}/>
<Inputt label="OptionD" onChange={(e)=> setModel({...model,OptionD: e.target.value})}/>
<Inputt label="Answer" onChange={(e)=> setModel({...model,Answer: e.target.value})}/>
<Button onClick={SendFormDataaay}>Send</Button>


        
        </>
    );
}