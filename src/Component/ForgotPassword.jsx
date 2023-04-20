import  React,{useState,useContext} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import validator from "validator";
import { makeStyles } from '@mui/styles';
import userContext from "../Context/userContext";

export default function FormDialog(props) {
    // console.log("in gtgt=="+props.flag)
//   const [open, setOpen] = React.useState(false);
  const[userEmail,setUserEmail]=useState("")
  const userDeatils=useContext(userContext)
 
async function restPassword()
{   
  
    try
    {
await  userDeatils.RestUserPswd(userEmail)
props.setflag();
alert("Password reset link sent!");
    }
    catch{
      alert("error!");
    }
    
}



  const useStyles=makeStyles({
   brdr:{
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: "#5F9EA0"
        }
      }
    
    }
    })
    const classes=useStyles();
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={props.flag} onClose={()=>{}}>
        <DialogTitle  style={{textAlign:"center" ,fontSize:"2rem"}} > Reset Your Password </DialogTitle>
        <DialogContent>
          <DialogContentText style={{fontSize:"0.8rem"}}>
          Lost your password? Please enter your email address you will receive a link to reset your password
          </DialogContentText>
          <TextField className={classes.brdr}
     
     
            autoFocus
            margin="dense"
            id="name"
           
            type="email"
            fullWidth
            variant="outlined"
            placeholder='EmailId'
            size='small' 
            error={(userEmail!="")?!(validator.isEmail(userEmail)):false}

            onChange={(e)=>{setUserEmail(e.target.value)}}
        //   style={{border:"#5F9EA0"}}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained"  style={{backgroundColor:"#5F9EA0"}} onClick={restPassword}>Reset Password</Button>
          <Button variant="contained" style={{backgroundColor:"#5F9EA0"}} onClick={props.setflag}>return to login</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}