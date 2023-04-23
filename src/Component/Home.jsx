import React,{useContext,useEffect,useState} from "react"
import ReactDom from "react-dom"
import Navbar from "./Navbar";
import Upload from "./Upload";
import ReelCard from "./ReelCard";
import userData from "../Context/userContext"
import {auth,database} from "../Component/Firebase"
import { collection, setDoc ,doc,getFirestore,onSnapshot} from "firebase/firestore";
import "./Home.css" 



function Home(){
 
  
  const[postCollection,SetPostcollection]=useState([]);
     const userDeatils =useContext(userData)
    const database = getFirestore();
   const databaseRef = collection(database, "posts");

useEffect(()=>{
    onSnapshot(databaseRef, docsSnap => { 
      let tempPost=[];
       docsSnap.forEach((doc) => {
          if(!tempPost.includes(doc.data()))
          {
          tempPost.push(doc.data())
          }
       
        })
        tempPost.sort(function(x, y){
            return y.time - x.time;
        })
       
        SetPostcollection([...tempPost])
      });

      let options = {
        //     root: document.querySelector(".videos"),
           
            threshold: 1.0,
          };
          
         
   
},[])


async function postLike(Pid)
{

 let idx=postCollection.findIndex((post)=>(post.pid==Pid))
 
 await setDoc(doc(database, "posts",`${postCollection[idx].userId+postCollection[idx].name}`), {
 like:[...postCollection[idx].like,userDeatils.userDetails.uid]
},{ merge: true });
}



    return(
        <>
       
        <Navbar/>
        <div classname="home" style={{width:"300px",margin:"auto",marginTop:"25px"}}>
        <Upload />
       <div className="videos" style={{height:"487px", overflow:"scroll",scrollSnapType:"y mandatory",marginTop:"20px",borderRadius:"15px"}}>
        {
         postCollection.map((item)=>{
        return <ReelCard postData={item} postLike={postLike} />
        })
         }
       </div>
        </div>

        </>

    )
}


export default Home;