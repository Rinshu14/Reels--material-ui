import React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import "./ReelCard.css"
import { useContext, useState } from 'react';
import userContext from '../Context/userContext';
import { ToggleOff } from '@material-ui/icons';
import CommentCard from "./CommentCard";


function toggleMute()
  {
    
    console.log("intoggle")
  }
 
export default function ReelCard(props) {
 
  let cmntBtnClick=()=>{
    (window.getComputedStyle(document.querySelector(".commentCard")).display=="none")?document.querySelector(".commentCard").style.display="flex":document.querySelector(".commentCard").style.display="none"
 document.querySelector(".videos").classList.contains("disableVideoDiv")
  }
  

  const userDetails=useContext(userContext) 
  
    const useStyles=makeStyles({
        userName:{
                position: "absolute",
                bottom: "0.5rem",
                left: "1rem"
              },
              hjhj:{
              scrollSnapAlign:"start",
              borderRadius:"0px !important",
              height:"452px"
           }
          })
        
const classes=useStyles();
  return (
<Card className={classes.hjhj } sx={{ minHeight: '200px', width: '280px'}} >
      <CardCover>
     
         <video
            autoPlay
            loop
            muted
         id={`${props.postData.pid}`}
         
           // poster={`${props.postData.postUrl}`}
          onClick={()=>{console.log("inclick")}}   
          onEnded={()=>{console.log("in ended")}}
          > <source
          src={`${props.postData.postUrl}`}
          type="video/mp4"
        />
      </video>
    
      </CardCover>
    
      <CardContent sx={{justifyContent: 'flex-end' }}>
      <p className="post_id " style={{display:"none"}}>{props.postData.pid}</p>
      <Avatar
         src={`${userDetails.userDetails.profImg}`}
          size="sm"
          sx={{ '--Avatar-size': '2.5rem' }}
        />
        <Typography className={classes.userName} level="h2" fontSize="lg" textColor="#fff" mb={1}>
         {userDetails.userDetails.userName}
        </Typography>
       <Button className="lkebtn" disableRipple variant="outlined"  onClick={()=>{ props.postLike(props.postData.pid)}}>
          {props.postData.like.includes(userDetails.userDetails.uid)?<FavoriteIcon style={{color:"red"}}/>:<FavoriteBorderIcon/> }
        </Button>
        <Button className="cmntbtn" disableRipple variant="outlined" onClick={cmntBtnClick}><ModeCommentIcon/></Button>
      </CardContent>
   <CommentCard/>
    </Card>
  );
}