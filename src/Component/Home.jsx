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

   // const post=useContext(postContext)
    const[postCollection,SetPostcollection]=useState([]);
     const userDeatils =useContext(userData)
    const database = getFirestore();
   const databaseRef = collection(database, "posts");

useEffect(()=>{
    onSnapshot(databaseRef, docsSnap => { 
       // SetPostcollection([])
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
},[])


async function postLike(Pid)
{
 console.log("pid=="+Pid)

 let idx=postCollection.findIndex((post)=>(post.pid==Pid))

await setDoc(doc(database, "posts",`${userDeatils.userDetails.uid+postCollection[idx].name}`), {
   like:[...postCollection[idx].like,userDeatils.userDetails.uid]
},{ merge: true });
}

async function postComment(Pid)
{
 console.log("pid=="+Pid)

 let idx=postCollection.findIndex((post)=>(post.pid==Pid))

await setDoc(doc(database, "posts",`${userDeatils.userDetails.uid+postCollection[idx].name}`), {
   like:[...postCollection[idx].like,userDeatils.userDetails.uid]
},{ merge: true });
}

    return(
        <>
       
        <Navbar/>
        <div classname="home" style={{width:"300px",margin:"auto",marginTop:"25px"}}>
        <Upload />
       <div className="videos disableVideoDiv" style={{height:"490px" ,width:"315px" , overflow:"scroll",scrollSnapType:"y mandatory",marginTop:"20px"}}>
        {
         postCollection.map((item)=>{
          return <ReelCard postData={item} postLike={postLike} postComment/>
        })
         }
       </div>
        </div>

        </>

    )
}


export default Home;