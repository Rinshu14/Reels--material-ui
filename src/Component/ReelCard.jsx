import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import "./ReelCard.css"

let lkebtnClick=()=>{

  let v=document.querySelector(".lkebtn");


}

export default function GradientCover() {

    const useStyles=makeStyles({
        userName:{
              
                
                position: "absolute",
                bottom: "0.5rem",
                left: "1rem"
              },
              hjhj:{marginTop:"20px"}
             
            })
        
            const classes=useStyles();
  return (
    <Card className={classes.hjhj} sx={{ minHeight: '450px', width: '280px' }} >
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
    
      <CardContent sx={{justifyContent: 'flex-end' }}>
       
      <Avatar
          src="https://images.unsplash.com/profile-1502669002421-a8d274ad2897?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
          size="sm"
          sx={{ '--Avatar-size': '2.5rem' }}
        />
        <Typography className={classes.userName} level="h2" fontSize="lg" textColor="#fff" mb={1}>
         {` Yosemite National Park`}
        </Typography>
       
        <Button className="lkebtn" disableRipple variant="outlined"  onClick={lkebtnClick}><FavoriteBorderIcon/></Button>
        <Button className="cmntbtn" disableRipple variant="outlined"><ModeCommentIcon/></Button>
      </CardContent>
    </Card>
  );
}