import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { PostingOfData } from '../config/firebasemethods';
import { Button } from '@mui/material';
import Registeration from '../public routess/register';
import Toggle, { ToggleButton } from '../componentss/toogle'

export default function FormControl() {

    // const [model, setModel] = React.useState({});

    // const [valueee,setValvuee] = React.useState(1);

    
    

    // function Check(){
    //   setModel({Name:"true"})
    //   setValvuee(valueee+1);
      
    //   if(model.Name === "true"){
    //     setModel({Name:"false"});
    //     const nodeName = "FormControla"
    //         console.log(model)
    
    //        PostingOfData(nodeName, model)
    //             .then((res) => {
    //                 console.log(res)
    //             })
    //             .catch((err) => {
    //                 console.log(err)
    //             })
    //   }
    //   else{
    //     setModel({Name:"true"});
    //     const nodeName = "Ttaha"
    //         console.log(model)
    
    //        PostingOfData(nodeName, model)
    //             .then((res) => {
    //                 console.log(res)
    //             })
    //             .catch((err) => {
    //                 console.log(err)
    //             })
    //   }

    // }

    const [isVisible, setIsVisible] = React.useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };


  return (
    <>
    {/* <button onClick={handleToggle}>{isVisible ? 'Hide Form' : 'Show Form'}</button> */}
    <Toggle isVisible={isVisible} onToggle={handleToggle} />
    <Registeration isVisible={isVisible}/>
      

    
    </>
    
  );
}