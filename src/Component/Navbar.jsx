import * as React from 'react';
import ReactDom from "react-dom"
import {MdHome} from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import "./Navbar.css"
let dropDown=()=>{
  
  let f=document.querySelector(".drpdwn")

  f.style.display=(f.style.display=="none")?"inline-block":"none"

 
  
}
function Navbar(){
  return(
    <>
    <div className="Nav-Wrapper"  onClick={()=>{dropDown()}}>
      <img className="instaImage" src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram-1.png" 
     ></img>
      <MdHome className='home-icon'/>
      <FiInstagram  className='insta-icon' />
      <div className='profile-img' ></div>
   
    </div>
    {/* <div className="drpdwn" style={{display:"none" ,color:"#787878" ,border:"2px 	#E8E8E8  solid",height:"4rem",width:"4rem",borderRadius:"5px",borderTop:"0px",boxShadow:"2px 0px 5px #E0E0E0 ",marginLeft:"70rem",marginTop:"-2px",backgroundColor:"whilte"}}> */}

    <div className="drpdwn"> 
<div className="drpdwn-child" >Profile</div>
<div className="drpdwn-child" >Logout</div>
</div>
   
    </>
  )
}

export default Navbar;
