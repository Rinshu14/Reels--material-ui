import React,{useState,useContext} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./SignUp.css"
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';
import AlertModal from './AlertModal';
import userContext from '../Context/userContext';


var pswdRglrExpn = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;







export default function ActionAreaCard() {

const userDetails=useContext(userContext)


  const useStyles=makeStyles({
    text:{color:"grey",
    fontSize:"7px",
    textAlign:"center"
  },
    button:{
      marginTop:"5px !important"
    },
    login:{
      marginLeft:"459px !important",
      minWidth:"30.5vw !important",
      marginTop:"10px !important",
      height:"1.5rem"
    }
  })
  const classes=useStyles();
  const navigate = useNavigate();
  const[userEmail,setUserEmail]=useState("")
  const[password,setPassword]=useState("")
  const[profImg,setProfImg]=useState("")
  const[userName,setUserName]=useState("");
  const [open, setOpen] = useState(false);
  const[emailError,setEmailError]=useState(false)
  const[passError,setPassError]=useState(false)
  const[diagBoxError,setdiagBoxError]=useState("")

 
  


  const handleClickOpen = () => {
 
  setOpen(true);
  };

  const handleClose = () => {
    setdiagBoxError("");
 setOpen(false);
  };

  return (
    <div className="signUp"  >
      <div className="signUpWrapper">
    <Card  variant ="outlined" sx={{ maxWidth: 400 }}>
   <CardMedia
          component="img"
          height="80"
          image="https://www.meilleure-innovation.com/wp-content/uploads/2022/04/logo-instagram.png"/>
        <CardContent >
     <Typography   className={classes.text} variant="subtitle2">
          Sign up to see photos and videos from your friends
        </Typography>
        <TextField error={emailError} fullWidth id="outlined-basic" label="Email" variant="outlined" margin='dense' size='small'
        onChange={(e)=>{
         let isError=(e.target.value!="")?!(validator.isEmail(e.target.value)):false;
         setEmailError(isError);
         if(isError==false){
         
          setUserEmail(e.target.value)
          
          
          }}}/>
        <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" margin='dense' size='small' 
        error={passError} onChange={(e)=>{
          
          let isError=(e.target.value!="")?!(pswdRglrExpn.test(e.target.value)):false;
         setPassError(isError);
         if(isError==false){
          setPassword(e.target.value)}
      
        }}/>
        <TextField fullWidth id="outlined-basic" label="Full Name" variant="outlined" margin='dense' size='small'
        onChange={(e)=>{
          setUserName(e.target.value)}}/>
        <Button fullWidth variant="outlined" component="label" >
       Upload Profile Image
      <input hidden accept="image/*" multiple type="file" onChange={(e)=>{
       
       if((Math.round((e.target.files[0].size)/1024))>55)
       {setdiagBoxError("Please upload file less than 10kb");
        handleClickOpen()}
       else{
     
        setProfImg(e.target.files[0]);
      }
    
        }} />
</Button>
<Button  className={classes.button} fullWidth variant="contained" onClick={()=>{
  if(!passError && !emailError){
  
  userDetails.signUp(userEmail,password,userName,profImg) }
  else
  {setdiagBoxError("Please Enter valid email and password")
  handleClickOpen()


 }}}>
    Sign Up</Button>
</CardContent>
</Card>
    </div>
    <Button className={classes.login}  variant="outlined"  onClick={()=>{navigate(-1)}}  >Have an account ? Login</Button>
<AlertModal open={open} handleClose={handleClose} diagBoxError={diagBoxError}/>
</div>
  );
}
