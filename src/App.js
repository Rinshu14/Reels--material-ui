import SignUp from "./Component/SignUp";
import Login from "./Component/Login";
import Home from "./Component/Home";
import Profile from "./Component/Profile"
import AlertModal from "./Component/AlertModal";
import { BrowserRouter as Router, Routes, Route, json } from "react-router-dom";
import React,{useContext,useState} from "react"
import UserData from "./Context/UserData"
import userContext from "./Context/userContext"
import { PostData } from "./Context/PostData";
import ForgotPassword from "./Component/ForgotPassword"



function App() {


  


  return (

    <Router>
       <UserData>
 <Routes>
 {/* <Route path="/Login" element={<Login/>}></Route> */}
 <Route path="/SignUp" element={<SignUp/>}></Route>
 <Route path="/" element={<Login/>}></Route>

 <Route path="/Home/Profile" element={<Profile/>}></Route>
 <Route path="/Home" element={<Home/>}></Route>

 </Routes>
 

</UserData>
    </Router>


 );
}
export default App;
