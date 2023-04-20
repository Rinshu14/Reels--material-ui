import  React,{useState,useContext, useEffect} from 'react';
import ReactDom from "react-dom"
import Button from '@mui/material/Button';
import AlertModal from "./AlertModal"
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import {auth,database} from "../Component/Firebase"
import { collection, setDoc ,doc} from "firebase/firestore"; 
import userContext from '../Context/userContext';
import { v4 as uuid } from 'uuid';
import { getStorage, ref ,uploadBytes,getDownloadURL,uploadBytesResumable} from "firebase/storage";
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';

function Upload(){

  const [open, setOpen] = useState(false);

  const [uploadProgress, setUploadProgress] = useState(0);
  const[diagBoxError,setdiagBoxError]=useState("")
  const userDeatils=useContext(userContext)
  const storage = getStorage();

  
  const handleClickOpen = () => {
    setOpen(true);
    };
  
  const handleClose = () => {
      setdiagBoxError("");
      setOpen(false);
    };
 
async function upload(file) 
{  

 const storageRef = ref(storage,`post\\${file.name}`);
 let  uploadTask= uploadBytesResumable(storageRef, file)
//  console.log(typeof ff)


 uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    setUploadProgress(progress)
   // console.log('Upload is ' + progress + '% done');
    // switch (snapshot.state) {
    //   case 'paused':
    //     console.log('Upload is paused');
    //     break;
    //   case 'running':
    //     console.log('Upload is running');
    //     break;
  //   }
  })
 let videoUrl=await getDownloadURL(storageRef)
  

let postId = uuid();


    await setDoc(doc(database,"posts",`${userDeatils.userDetails.uid+file.name}`), 
    {
       name:file.name,
       like:[],
       comment:[],
       userId:userDeatils.userDetails.uid,
       userName:userDeatils.userDetails.userName,
       userProfileImage:userDeatils.userDetails.profImg,
       pid:postId,
       postUrl:videoUrl,
       time:Date.now()

    });

  }
  
 
  

    return(
   <>
    <Button variant="outlined" component="label" style={{color:"#A569BD" ,border:"1px solid #A569BD" ,marginLeft:"4.7rem"}}>
    <MovieFilterIcon />
       Upload Video
  <input hidden accept="video/*" multiple type="file" onChange={(e)=>{
  
   if((Math.round((e.target.files[0].size)/(1024*1024)))>50)
   {
    setdiagBoxError("Please upload file less than 100mb");
    handleClickOpen()
  }
    else{
      
      upload(e.target.files[0])
    }
  }}/>
 
</Button>

<AlertModal open={open} handleClose={handleClose} diagBoxError={diagBoxError}/>
</>
)
}

export default Upload