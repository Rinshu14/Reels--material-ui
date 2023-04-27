import React,{useContext} from "react"
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import "./CommentBox.css"
import { collection, query, where ,getFirestore,getDocs,setDoc,doc} from "firebase/firestore";
import userContext from "../Context/userContext"
import { v4 as uuid } from 'uuid';


function CommentBox(props)
{
  
  const userDetails=useContext(userContext)



  function commentTextClick(){
   
    document.querySelector(".commentText").querySelector("div").innerText=""
    document.querySelector(".commentText").querySelector("div").style.color="#D0D0D0"
  }


 async function sendBtnClick(){
  

  if(document.querySelector(".text").innerText=="Type something ...")
  {
   
   return;
  }
  let cmntId = uuid();
const database = getFirestore();
  const q = query(collection(database, "posts"), where("pid", "==", document.querySelector(".post_id").innerText));
 
let path;
  const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {path=doc.data()});

await setDoc(doc(database, "comments",`${cmntId}`), {
      pid:props.postId,
      comment:document.querySelector(".text").innerText,
      userName:userDetails.userDetails.userName,
      userProfImg:userDetails.userDetails.profImg,
      userId:userDetails.userDetails.uid,
      time:Date.now(),
      commentId:cmntId


      });
      document.querySelector(".text").innerText="Type something ..."
      await setDoc(doc(database, "posts",`${path.userId+path.name}`), {
      comment:[...path.comment,cmntId]
     },{ merge: true });

  
   
  }


    return(
        <>
        <div className="new_cmnt"style={{display:"flex",position:"fixed" ,backgroundColor:"white",bottom:"8.8rem" }}>
        <div  className="commentText" >
          <img src={userDetails.userDetails.profImg} style={{borderRadius:"50%",height:"1.5rem",width:"1.8rem",marginRight:"5px"}}></img>
            <div contentEditable="true" className="text" style={{width:"18.4rem" }} onClick={commentTextClick} >Type something ...</div>
        {/* <Textarea  placeholder="enter here"style={{height:"100%",width:"100%",outline:"none"}}></Textarea> */}
        </div> 
            <SendRoundedIcon  className="SendBtn" onClick={sendBtnClick}/>
          </div>
         
        </>
    )
}

export default CommentBox