import React,{useContext} from "react"
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import "./PrevComments.css"
import userContext from "../Context/userContext"
// export default function MyApp() {
//   return <Textarea placeholder="Type anything…" />;
// }

function PrevComments(props)


{

 // const userDetails=useContext(userContext)
  
  
    return(
        <>
        <div  style={{display:"flex" }}>
        <div  className="PrevcommentText" key={props.pid} style={props.flag?{marginLeft:"9rem"}:{}}  ><img src={props.profImg} style={{borderRadius:"50%",height:"1.5rem",width:"1.8rem"}}></img> <p style={{paddingLeft:"5px"}}>{props.comment}</p>
        </div>
          
          </div>
          
        </>
    )
}

export default PrevComments