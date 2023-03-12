import React from "react"
import ReactDom from "react-dom"
import Navbar from "./Navbar";
import Upload from "./Upload";
import ReelCard from "./ReelCard";
//import "./Home.css"

function Home(){
    return(
        <>
       
        <Navbar/>
        <div classname="home" style={{width:"300px",margin:"auto",marginTop:"25px"}}>
        <Upload/>
        <ReelCard />
        <ReelCard />
        </div>
        </>

    )
}


export default Home;