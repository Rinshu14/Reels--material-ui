import React from "react"
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import "./PrevComments.css"
// export default function MyApp() {
//   return <Textarea placeholder="Type anything…" />;
// }

function PrevComments()
{
  
    return(
        <>
        <div style={{display:"flex" }}>
        <div  className="PrevcommentText" ><img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" style={{borderRadius:"50%",height:"1.5rem",width:"1.8rem"}}></img> <p style={{paddingLeft:"5px"}}>I am vertically aligned</p></div>
          
          </div>
          
        </>
    )
}

export default PrevComments