
import { BrowserRouter } from "react-router-dom";

import Login from "../screens/login";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import SignUp from "../screens/signup";
import Admin from "../Dasboardsss/admindashboard";
import DashboardScreenn from "../screens/dashboard";
import Registeration from "../public routess/register";
import Result from "../public routess/result";
import InstituteDash from "../Dasboardsss/instituteDasboard";
import ColorThemeController from "../adminScreens/color-theme";
import StudentDash from "../Dasboardsss/studentDasboaroad";


function Routing(){
    
    return(
        <>
        
        <BrowserRouter>
        <Routes>
            
            <Route path="/admin/*" element={<Admin/>}/>
            <Route path="/institute/*" element={<InstituteDash/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            
            <Route path="registration_form" element={<Registeration/>}/>
            <Route path="result" element={<Result/>}/>
            <Route path="student/*" element={<StudentDash/>}/>

            {/* <Route path="/*" element={<DashboardScreen/>}/> */}
        </Routes>
        
        </BrowserRouter>
        
        </>
    );
}

export default Routing;