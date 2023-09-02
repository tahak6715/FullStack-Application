import React, { useState } from "react";
import { GetDataById } from "../config/firebasemethods";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, CircularProgress } from "@mui/material";

export default function StudentList(){

  const navigate = useNavigate();

    const [value,CurrentValue] = React.useState([])

    const [isLoading, setIsLoading] = useState(true);

    const nodeName = "StudentForm"

    let GetDataOfStudent = () => {
        GetDataById(nodeName)
        .then((res) => {
          // console.log(res);
          CurrentValue([...res])
          setIsLoading(false);
          
          })
          .catch((err) => {
            console.log(err);
            setIsLoading(false);
          });
      };
    
      console.log(value)
      useEffect(() => {
        GetDataOfStudent();
     }, []);
    return(
        <>
        { isLoading?
      
      <Box sx={{display:"flex",justifyContent:"center"}} my={6}>
      <CircularProgress
      variant="indeterminate"
      
      sx={{
        color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
        animationDuration: '550ms',
      
      }}
      
      size={300}
              // thickness={400}
      />
      </Box>
      :
      
        <div className="bg-dark" style={{height:'538px', margin:'-10px'}}>
        <div className="d-flex justify-content-between">
        <Button className="bg-dark text-primary bg-white " onClick={() => navigate("/Institute/student_form")}>Registration Form.</Button>
        <Button className="bg-dark text-primary bg-white " onClick={() => navigate("/Institute/student_details")}>Student Detailss.</Button>
        </div>
        <table class="table table-dark">
  <thead className="text-white">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Student Name</th>
      <th scope="col">Father Name</th>
      <th scope="col">Course</th>
    </tr>
  </thead>
  <tbody className="text-primary">
        {value.map( (item,index) =>{
   return(
    <>
    <tr>
      <th scope="row">.</th>
      <td>{item.StudentName}</td>
      <td>{item.FatherName}</td>
      <td>{item.Courcess}</td>
    </tr>
  

    
    </>
   );
})}
</tbody>
</table>
</div>

        }
        
        </>
    );
}
