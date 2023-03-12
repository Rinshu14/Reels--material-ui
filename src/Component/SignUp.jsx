import React,{useState} from 'react';
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

var pswdRglrExpn = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

export default function ActionAreaCard() {

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
  const [open, setOpen] = useState(false);
      
  const handleClickOpen = () => {
  setOpen(true);
  };

  const handleClose = () => {
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
        <TextField error={(userEmail!="")?!(validator.isEmail(userEmail)):false} fullWidth id="outlined-basic" label="Email" variant="outlined" margin='dense' size='small'
        onChange={(e)=>{setUserEmail(e.target.value)}}/>
        <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" margin='dense' size='small' 
        error={(password!="")?!(pswdRglrExpn.test(password)):false} onChange={(e)=>{setPassword(e.target.value)}}/>
        <TextField fullWidth id="outlined-basic" label="Full Name" variant="outlined" margin='dense' size='small'/>
        <Button fullWidth variant="outlined" component="label" >
       Upload Profile Image
      <input hidden accept="image/*" multiple type="file" onChange={(e)=>{
       
       (Math.round((e.target.files[0].size)/1024))?handleClickOpen():setProfImg(URL.createObjectURL(e.target.files[0]));
        }} />
</Button>
<Button  className={classes.button} fullWidth variant="contained" onClick={()=>{}}>Sign Up</Button>
</CardContent>
</Card>
    </div>
    <Button className={classes.login}  variant="outlined"  onClick={()=>{navigate(-1)}}  >Have an account ? Login</Button>
<AlertModal open={open} handleClose={handleClose}/>
</div>
  );
}
