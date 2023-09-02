import { Avatar, Box, Button, CardMedia, CircularProgress, Grid, ListItem, Paper } from "@mui/material";
import { DeleteDataById, GetDataById } from "../config/firebasemethods";
import React, { useEffect , useState} from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";

export default function Innsitute(){

  const [isLoading, setIsLoading] = useState(true);

  let navigatation = useNavigate();

  let page = (obj) => {

    navigatation(`/admin/institute_detail`,{


      state:{obj:obj}
    }
    
    )


  }

  

    const [value,CurrentValue] = React.useState([])

  const nodeName = "InstituteForm"
  
  let GetDataOfInstitute = () => {
    GetDataById(nodeName)
    .then((res) => {
      // console.log(res);
      CurrentValue([...res])
      setIsLoading(false)
      
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      });
  };

  console.log(value)
  useEffect(() => {
    GetDataOfInstitute();
 }, []);

 let openForm=(obj)=>{

  navigatation(`/admin/institute_screen`,{
    state:{obj:obj},
  });

}

let DelForm=(obj)=>{

  DeleteDataById(nodeName,obj)
  .then((res) => {
    console.log(res);
    GetDataOfInstitute()
    })
    .catch((err) => {
      console.log(err);
    });
}
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
        <div className="bg-dark text-primary" style={{height:'538px', margin:'-10px'}} >

          <Paper >
        {/* <img width={"200px"} src="https://media.licdn.com/dms/image/C4E0BAQEoK7OIeSpm5g/company-logo_200_200/0/1617382721225?e=2147483647&v=beta&t=J5somJgWzd5U_oXiM3Y_2e45dopii32djok3KFHxbhs"/>
        <h1>Institute Name : Jawan Pakistan</h1>
        <h1>No of campuses : 4 </h1>
        <h1>Active Status : Onn</h1> */}
        <Paper className="py-4 px-4 bg-dark"  >
    <Grid container spacing={3}>
      <Grid item xs={2}>
      <h5 className="text-white">{"Logo"}</h5>
      
      </Grid>
      <Grid item xs={3}>
      <h5 className="text-white">{"Institute Name"}</h5>
      </Grid>
      <Grid item xs={3}>
      <h5 className="text-white">{"No Of Campuses"}</h5>
      </Grid><Grid item xs={3}>
      <h5 className="text-white">{"Active Status"}</h5>
      </Grid>
      </Grid>
    </Paper>
        
        {value.map( (item,index) =>{
   return(
    <>
    {/* <CardMedia
        style={{width:'400px', height : '300px'}}
        image={item.LogoImage}
        title="green iguana"
      />
    <h1>Institute Name : {item.InstituteName}</h1>
    <h1>
       No Of Campuses :  {item.NoOfCampuses}
    </h1>
    <h1>Active Status : Onn.</h1> */}
    

    <Paper style={{height: '80px'}}  className="my-2 px-4" onClick={()=>{
      page(item)
    }}>
    <Grid container spacing={3}>
      <Grid item xs={2}>
      <Avatar style={{marginTop:'-8px'}} className="" alt="Remy Sharp" src={item.LogoImage} />
      </Grid>
      <Grid item xs={3}>
      <h4>{item.InstituteName}</h4>
      </Grid>
      <Grid item xs={3}>
      <h4>{item.NoOfCampuses}</h4>
      </Grid>
      <Grid item xs={3}>
      <h4>{"On"}</h4>
      <Box>    <Button onClick={(e)=>{
        e.stopPropagation();
        openForm(item)
      }}>Edit</Button>
      </Box>
      </Grid>
      <Grid item xs={1}>
      <h4><i class="bi bi-pencil"></i></h4>
      <Button style={{color:"red"}} onClick={(e)=>{
        e.stopPropagation();
        DelForm(item)
      }}>Delete</Button>

      
      </Grid>
      
      
      
      
      </Grid>
    </Paper>
    
    
    
    

        
        
    </>
   );
})}
</Paper>
</div>
}

        </>
    );


}