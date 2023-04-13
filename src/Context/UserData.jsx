import React,{useState,createContext, useEffect} from "react"
import userContext from "./userContext"
  import {auth,database} from "../Component/Firebase"
import { getAuth, createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword ,signOut,onAuthStateChanged } from "firebase/auth";
import { getStorage, ref ,uploadBytes,getDownloadURL} from "firebase/storage";
import { Navigate, useNavigate } from 'react-router-dom';
import Loader from "../Component/Loader"
import { collection, setDoc ,doc} from "firebase/firestore"; 
import { v4 as uuid } from 'uuid';





function UserData({children}){
const auth=getAuth();
const navigate = useNavigate();
const storage = getStorage();


const [loading,setLoading]=useState(true)
const[userDetails,setUserDetails]=useState({
    email:"",
    password:"",
     isAuth:false,
     userName:"",
     profImg:"",
     uid:""

})
// const unique_id = uuid();
 


 async function uploadProfileImg(img)
 {
const storageRef = ref(storage,`${auth.currentUser.uid}/profilePhoto`);
await uploadBytes(storageRef, img)
let profUrl=await getDownloadURL(storageRef)
return profUrl
}




async function  signUp(email,password,userName,profImg)
{
 let res=await createUserWithEmailAndPassword(auth, email, password)
let tt=""
 if(profImg=="")
 {
  tt="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/626fd8140423801.6241b91e24d9c.png"
 }
 else
 {
  tt=await  uploadProfileImg(profImg)
 }
 await updateProfile(res.user, {
    displayName: userName, photoURL: tt
  })
  //let uid=email+unique_id.slice(0,8)
await setDoc(doc(database,"users",auth.currentUser.uid), {
    name: userName,
    email: email,
    password: password,
    profImg:tt,
    uid:auth.currentUser.uid
  });
  
 setUserDetails({email:auth.currentUser.email,password:auth.currentUser.password,userName:auth.currentUser.displayName,profImg:tt,isAuth:"true",uid:auth.currentUser.uid})

}

async function signIn(email,password)
{
try
  {
    await signInWithEmailAndPassword(auth,email,password)
  }
  catch (error)
  {
   if((error.message).includes("auth/wrong-password") || (error.message).includes("auth/wrong-email"))
    { 
    return "invalid username or password";
    }
 return "success"
  }

 
  
  setUserDetails({email:auth.currentUser.email,password:auth.currentUser.password,userName:auth.currentUser.displayName,profImg:auth.currentUser.photoURL,isAuth:true,uid:auth.currentUser.uid})


}

async function logOut(){
    console.log("Logout")
   await signOut(auth)
    setUserDetails({email:"",password:"",userName:"",profImg:"",isAuth:false,uid:""})
}

async function isAnyUserLoggedIn(){
 
   onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoading(false)
      setUserDetails({email:auth.currentUser.email,password:auth.currentUser.password,userName:auth.currentUser.displayName,profImg:auth.currentUser.photoURL,isAuth:true,uid:auth.currentUser.uid})
} 
else 
{
      setLoading(false)
      setUserDetails({email:"",password:"",userName:"",profImg:"",isAuth:false,uid:""})
      navigate("")
    }
  });
}


const store={userDetails,setUserDetails,signIn,signUp,logOut,uploadProfileImg}


useEffect(()=>{ 
  console.log("usereffrect")
    if(userDetails.isAuth){
        navigate('\Home')
      }
    else{
       navigate("")  
    }
},[userDetails])

useEffect(isAnyUserLoggedIn,[])

if(loading)
{
  return( <Loader/>)
}
else{
return (
    <userContext.Provider value={store}>
    {children}
    </userContext.Provider>
)}

}

export default UserData;