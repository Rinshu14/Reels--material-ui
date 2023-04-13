 import React, { useContext, useState } from "react"
import { useNavigate } from 'react-router-dom';
import img1 from ".././images/img2.jpg"
 import img2 from ".././images/img3.jpg"
 import img3 from ".././images/img6.jpeg"
 import img4 from ".././images/img7.jpg"
 import img5 from ".././images/img8.jpg"
 import img6 from ".././images/img9.jpg"
 import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { CarouselProvider, Slider, Slide,Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import "./Login.css"
import validator from "validator";
import userContext from "../Context/userContext";
import AlertModal from "../Component/AlertModal"


var pswdRglrExpn = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;



// let  lgnClick=()=>{
//   console.log("login click")
//   userDeatils.signIn(userEmail,password);
 
// };

 let Login=()=>{

  const[userEmail,setUserEmail]=useState("")
  const[password,setPassword]=useState("")
  const[diagBoxError,setdiagBoxError]=useState("")
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const userDeatils=useContext(userContext);

  const useStyles=makeStyles({
   
  login:{
    
       minWidth:"30vw !important",
       marginTop:"10px !important",
       height:"1.5rem"
    },
    slideImg:{
      height:"10rem"
    }
  })
  const classes=useStyles();

async function lgnClick(){
  console.log("login click")
 let error= await userDeatils.signIn(userEmail,password);

  if(error=="invalid username or password")
 {  
   setdiagBoxError("invalid username or password")
   handleClickOpen()
 }
 
};

const handleClickOpen = () => {
 console.log("handle open")
  setOpen(true);
  };

  const handleClose = () => {
    setdiagBoxError("");
 setOpen(false);
  };


  return(
    <div className="LoginWrapper" >
      <div className="login" >
      <CarouselProvider
        naturalSlideWidth={30}
        naturalSlideHeight={60}
        totalSlides={6}
        interval={3000}
        autoPlay={true}
        isPlaying={true}
       
      >
        <Slider>
          <Slide index={0}><Image src={img1}/></Slide>
          <Slide index={1}><Image src={img2}/></Slide>
          <Slide index={2}><Image src={img3}/></Slide>
          <Slide index={3}><Image src={img4}/></Slide>
          <Slide index={4}><Image src={img5}/></Slide>
          <Slide index={5}><Image src={img6}/></Slide>

        </Slider>
       
      </CarouselProvider>
      </div>
      <div style={{width:"60%",height:"80%",marginTop:"8%",marginLeft:"30px"}}>
      <Card  variant ="outlined" sx={{ maxWidth: 400 }}>
      
      <CardMedia
        component="img"
        height="100"
        image="https://www.meilleure-innovation.com/wp-content/uploads/2022/04/logo-instagram.png"
        
      />
      <CardContent >
        
       
        <TextField error={(userEmail!="")?!(validator.isEmail(userEmail)):false} className="mail" fullWidth id="outlined-basic " label="Email" variant="outlined" margin='dense' size='small' 
        onChange={(e)=>{setUserEmail(e.target.value)}}/>
        <TextField error={(password!="")?!(pswdRglrExpn.test(password)):false} fullWidth id="outlined-basic password" label="Password" variant="outlined" margin='dense' size='small'
        onChange={(e)=>{setPassword(e.target.value)}}/>

        <Button disableRipple fullWidth  component="label" >Forgot Password?</Button>
       
       
        <Button  fullWidth variant="contained" onClick={
          //()=>{
           // console.log("login click")
       //userDeatils.signIn(userEmail,password);}

    lgnClick}
       >Login</Button>

         
        </CardContent>
      
      </Card>
      <Button disableRipple className={classes.login}  variant="outlined"
       onClick={()=>{navigate('\SignUp')}}
      >Don't have an account ? Signup</Button>
      </div>
      <AlertModal open={open} handleClose={handleClose} diagBoxError={diagBoxError}/>
    </div>
    
  )
}

export default Login