import SignUp from "./Component/SignUp";
import Login from "./Component/Login";
import Home from "./Component/Home";
import Profile from "./Component/Profile"
import AlertModal from "./Component/AlertModal";
import { BrowserRouter as Router, Routes, Route, json } from "react-router-dom";

function App() {




  return (

    <Router>
 <Routes>
 <Route path="/SignUp" element={<SignUp/>}></Route>
 <Route path="/" element={<Login/>}></Route>
 </Routes>
    </Router>

   
  );
}
export default App;
