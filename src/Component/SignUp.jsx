import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./SignUp.css"
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';


export default function ActionAreaCard() {

  const useStyles=makeStyles({
    text:{color:"grey",
    fontSize:"7px",
    textAlign:"center"
   
    
    },
    button:{
      marginTop:"5px !important",
      
    },
    login:{
      marginLeft:"459px !important",
      minWidth:"30.5vw !important",
      marginTop:"10px !important",
      height:"1.5rem"
    }
  })
  const classes=useStyles();
  return (
    <div className="signUp"  >
      <div className="signUpWrapper">
    <Card  variant ="outlined" sx={{ maxWidth: 400 }}>
      
        <CardMedia
          component="img"
          height="100"
          image="https://www.meilleure-innovation.com/wp-content/uploads/2022/04/logo-instagram.png"
          
        />
        <CardContent >
        
        <Typography   className={classes.text} variant="subtitle2">
          Sign up to see photos and videos from your friends
        </Typography>
        <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" margin='dense' size='small'/>
        <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" margin='dense' size='small'/>
        <TextField fullWidth id="outlined-basic" label="Full Nmae" variant="outlined" margin='dense' size='small'/>
        <Button fullWidth variant="outlined" component="label" >
  Upload Profile Image
  <input hidden accept="image/*" multiple type="file" />
</Button>
<Button  className={classes.button} fullWidth variant="contained" >Sign Up</Button>

         
        </CardContent>
      
    </Card>
    </div>
    <Button className={classes.login}  variant="outlined">Have an account ? Login</Button>
    </div>
  );
}
