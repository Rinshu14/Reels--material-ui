import React from "react"
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import "./CommentBox.css"

function CommentBox()
{
  function commentTextClick(){
   console.log("onclick")
    document.querySelector(".commentText").querySelector("div").innerText=""
    document.querySelector(".commentText").querySelector("div").style.color="#D0D0D0"
  }
 
    return(
        <>
        <div style={{display:"flex" }}>
        <div  className="commentText" >
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" style={{borderRadius:"50%",height:"1.5rem",width:"1.8rem",marginRight:"5px"}}></img>
           <div contentEditable="true" className="text" style={{width:"18.4rem" }} onClick={commentTextClick} >Type something.....</div>
           </div>
            <SendRoundedIcon  className="SendBtn" onClick={()=>{console.log("clclc")}}/>
          </div>
         
        </>
    )
}

export default CommentBox