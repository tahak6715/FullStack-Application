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

    const nodeName = "StudentForm"

    let GetDataOfStudent = () => {
        GetDataById(nodeName)
        .then((res) => {
          // console.log(res);
          CurrentValue([...res])
          
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
      console.log(value)
      React.useEffect(() => {
        GetDataOfStudent();
     }, []);
  return (
    <div className="bg-dark text-primary" style={{height:'538px', margin:'-10px'}}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Student Name</StyledTableCell>
            <StyledTableCell align="right">Father Name</StyledTableCell>
            <StyledTableCell align="right">Section&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Last Qualification&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Course&nbsp;</StyledTableCell>
            <StyledTableCell align="right">CNIC&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {value.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.StudentName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.FatherName}</StyledTableCell>
              <StyledTableCell align="right">{row.Section}</StyledTableCell>
              <StyledTableCell align="right">{row.LastQualifictaion}</StyledTableCell>
              <StyledTableCell align="right">{row.Courcess}</StyledTableCell>
              <StyledTableCell align="right">{row.CNIC}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  );
}