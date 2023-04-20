import * as React from 'react';
import Navbar from './Navbar';
import "./Profile.css"
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import {useContext,useState,useEffect} from "react"
import userContext from "../Context/userContext"
import { collection, setDoc ,doc,getFirestore,onSnapshot} from "firebase/firestore"; 



function Profile(){
  const userDetails=useContext(userContext)
  const[postCollection,SetPostcollection]=useState([]);
     
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

return(
   <>
   <Navbar/>
   <div className="info-section"  >
    
    <div className="prof_img" style={{backgroundImage:`url(${userDetails.userDetails.profImg})`}}></div>
    <div style={{marginTop:"1.5rem",marginLeft:"25rem"}}>
        <p >{`Email :${userDetails.userDetails.email}`}</p>
        <p >{`post : 3`}</p>
      
    </div>
    

    
   </div>


   <div className="upload-section">
    

  {/* <Card sx={{ height: '300px', width: '150px' ,margin:"20px"}} >
      <CardCover>
        
         <video
            autoPlay
            loop
            muted
            key={}
            poster="https://assets.codepen.io/6093409/river.jpg"
          > <source
          src="https://assets.codepen.io/6093409/river.mp4"
          type="video/mp4"
        />
      </video>
      </CardCover>
     
    

    </Card> */}


{
postCollection.map((item)=>{
          return  <Card sx={{ height: '300px', width: '150px' ,margin:"20px",borderRadius:"15px"}} >
          <CardCover>
            
             <video
                autoPlay
                loop
                muted
                key={`${item.pid}`}
                //poster="https://assets.codepen.io/6093409/river.jpg"
                poster={`${item.postUrl}`}
              > <source
              src={`${item.postUrl}`}
              type="video/mp4"
            />
          </video>
          </CardCover>
         
        
    
        </Card> 
        })
         }




    {/* <Card sx={{ height: '300px', width: '150px' ,margin:"20px" }} >
      <CardCover>
        
         <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          > <source
          src="https://assets.codepen.io/6093409/river.mp4"
          type="video/mp4"
        />
      </video>
      </CardCover>
      </Card>
      <Card sx={{ height: '300px', width: '150px' ,margin:"20px" }} >
      <CardCover>
        
         <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          > <source
          src="https://assets.codepen.io/6093409/river.mp4"
          type="video/mp4"
        />
      </video>
      </CardCover>
      </Card>
      <Card sx={{ height: '300px', width: '150px' ,margin:"20px" }} >
      <CardCover>
        
         <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          > <source
          src="https://assets.codepen.io/6093409/river.mp4"
          type="video/mp4"
        />
      </video>
      </CardCover>
      </Card>
      <Card sx={{ height: '300px', width: '150px' ,margin:"20px" }} >
      <CardCover>
        
         <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          > <source
          src="https://assets.codepen.io/6093409/river.mp4"
          type="video/mp4"
        />
      </video>
      </CardCover>
      </Card>
      <Card sx={{ height: '300px', width: '150px' ,margin:"20px" }} >
      <CardCover>
        
         <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          > <source
          src="https://assets.codepen.io/6093409/river.mp4"
          type="video/mp4"
        />
      </video>
      </CardCover>
      </Card> */}
</div>
   </>


)
}

export default Profile;