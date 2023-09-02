import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GetDataById } from '../config/firebasemethods';
import { useNavigate } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import { useState } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



export default function StudentDetails() {

    const [value,CurrentValue] = React.useState([])

    const [isLoading, setIsLoading] = useState(true);

    const nodeName = "CourseFormy"

    let navigatation = useNavigate();

  let page = (obj) => {

    navigatation(`/institute/course_detail`,{


      state:{obj:obj}
    }
    
    )


  }


    let GetDataOfStudent = () => {
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
      React.useEffect(() => {
        GetDataOfStudent();
     }, []);
  return (
    <div>

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
    <div className="bg-dark text-primary text-primary" style={{height:'538px', margin:'-10px'}} >
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          
            <StyledTableCell>Course Name</StyledTableCell>
            <StyledTableCell align="">Duration</StyledTableCell>
            <StyledTableCell align="">Fees&nbsp;</StyledTableCell>
            <StyledTableCell align="right">{}</StyledTableCell>
            <StyledTableCell align="right">{}</StyledTableCell>
            <StyledTableCell align="right">{}</StyledTableCell>
            <StyledTableCell align="right">{}</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {value.map((row) => (
            <StyledTableRow className='text-primary' key={row.name} onClick={() => page(row)}>
              
              <StyledTableCell component="th" scope="row">
                {row.CourseName}
              </StyledTableCell>
              
              <StyledTableCell align="">{row.Duration}</StyledTableCell>
              <StyledTableCell align="">{row.fees}</StyledTableCell>
              <StyledTableCell align="right">{}</StyledTableCell>
              <StyledTableCell align="right">{}</StyledTableCell>
              <StyledTableCell align="right">{}</StyledTableCell>
              <StyledTableCell align="right">{}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
    </div>
  }
  </div>
          
  );
}