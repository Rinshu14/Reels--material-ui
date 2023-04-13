import React,{useEffectgit remote add origin https://github.com/Rinshu14/sample.git} from "react"
import "./CommentCard.css"
import Comment from "./CommentBox"
import PrevComments from "./PrevComments"
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';




function CommentCard()
{
    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
    
        return () => {
          document.removeEventListener("keydown", escFunction, false);
        };
      }, []);

    let escFunction=()=>{
        console.log("esc click")
        document.querySelector(".commentCard").style.display="none"
 
    }
    
  return(
      <div className="commentCard" onKeyUp={()=>{console.log("keydown")}} >
        
         <Comment/>
       
        {/* </div> */}
        </div> 
    )
}

export default CommentCard