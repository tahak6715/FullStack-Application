import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Routes, Route, Router, useNavigate } from 'react-router-dom';


import Innstitute_screen from '../adminScreens/institute_screen';
import Innsitute from '../adminScreens/institute';
import UserRegisterr from '../adminScreens/user-register';
import Reslutty from '../InstituteScreens/result';
import CourseForm from '../InstituteScreens/courseform';
import CourceList from '../InstituteScreens/courselist';

import StudentForm from '../InstituteScreens/studentform';
import StudentDetails from '../InstituteScreens/studentdetail';
import StudentList from '../InstituteScreens/studentlist';
import QuizApp from '../InstituteScreens/quiz';
import SendQuiz from '../InstituteScreens/sendquiz';
import FormControl from '../InstituteScreens/registrationcontrol';
import Institute_detail from '../adminScreens/institutedetail';
import Course_detail from '../InstituteScreens/coursedetail';
import QuizScreen from '../InstituteScreens/quizscreen';
import QuizAppppp from '../InstituteScreens/uizappp';




const drawerWidth = 240;

export default function StudentDash() {

    const [menuList, setMenuList] = React.useState([
        
        {
            name : "Students List",
            route : "studentss",
        },
        {
            name : "Quiz",
            route : "quiz",
        }
    ]);
    let navigate = useNavigate();
    let changeScreen = (route) => {         
        navigate(`${route}`)

    }
    const listStyle3 = {
      background: '#fafa00',
      backgroundColor: 'red'
    }



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Institute Portal
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer 
        variant="permanent"
        sx={{
          width: drawerWidth,
          
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {menuList.map((x, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() =>changeScreen(x.route)}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={x.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider  />
          
          
        </Box>
      </Drawer>
      <Box PaperProps={{
    sx: {
      backgroundColor: "rgba(30, 139, 195, 0.8)"
    }
  }} style={{listStyle3}}  component="main" sx={{ flexGrow: 1, p: 1 }}>
        <Toolbar />
        
       <Routes>
        
        <Route path='/student_form' element={<StudentForm/>}/>
        <Route path='/student_details' element={<StudentDetails/>}/>
        <Route path='/studentss' element={<StudentList/>}/>
       
        <Route path='/quiz' element={<QuizScreen/>}/>

        <Route path='/quiz_screen' element={<QuizApp/>}/>
        <Route path='/quiz_screenn' element={<QuizAppppp/>}/>
        
        
        {/* <route path='/postform' element={<PostForm/>}/> */}
       </Routes>
        
      </Box>
    </Box>
  );
}