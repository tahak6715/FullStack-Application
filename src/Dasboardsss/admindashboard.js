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
import ColorThemeController from '../adminScreens/color-theme';
import Institute_detail from '../adminScreens/institutedetail';




const drawerWidth = 240;

export default function Admin() {

    const [menuList, setMenuList] = React.useState([
        {
            name : "Institute",
            route : "Institute",
        },
        {
            name : "Institute Form",
            route : "institute_screen",
        },
        {
            name : "User Register",
            route : "user_register",
        },
        {
            name : "Color Theme Sett",
            route : "color_theme",
        },
        {
            name : "Activation & payment Details",
            route : "activation",
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
    <Box  className="dark-theme" sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin Panel
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
        <Route path='/institute' element={<Innsitute/>}/>
        <Route path='/institute_screen' element={<Innstitute_screen/>}/>
        <Route path='/user_register' element={<UserRegisterr/>}/>
        <Route path='/color_theme' element={<ColorThemeController/>}/>
        <Route path='/institute_detail' element={<Institute_detail/>}/>
        {/* <route path='/postform' element={<PostForm/>}/> */}
       </Routes>
        
      </Box>
    </Box>
  );
}