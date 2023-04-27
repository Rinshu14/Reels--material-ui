import React, { useEffect, useState, useContext } from "react"
import "./CommentCard.css"
import Comment from "./CommentBox"
import PrevComments from "./PrevComments"
import userContext from "../Context/userContext"
import { collection, setDoc, doc, getFirestore, onSnapshot, query, where, getDocs } from "firebase/firestore";
import { Flag } from "@mui/icons-material"



function CommentCard(props) {


  const userDetails = useContext(userContext)
  const [prevCommetnsCollection, SetprevCommetnsCollection] = useState([])

  const database = getFirestore();
  const databaseRef = collection(database, "comments");

 
  useEffect(() => {

    async function Call() {


      const database = getFirestore();

      const q = query(collection(database, "posts"), where("pid", "==",props.postId));
      let path;
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => { path = doc.data().comment });

     console.log( path)

      onSnapshot(databaseRef, docsSnap => {
        let tempPost=[]
        docsSnap.forEach((doc) => {
          if (!tempPost.includes(doc.data())) {
         

          if(doc.data().pid==props.postId)
          {
            tempPost.push(doc.data())
          }

          }

        })
        tempPost.sort(function (x, y) {
          return y.time - x.time;
        })
        
        SetprevCommetnsCollection([...tempPost])
      }
      );
    }

   Call();
   
  









  }, [])

 
  return (
    
    <div className="commentCard" >

      <Comment postId={props.postId}/>
      <div className="divx">
        {prevCommetnsCollection.map((e) => {

          let flag = (e.userId == userDetails.userDetails.uid) ? true : false

          return <PrevComments comment={e.comment} profImg={e.userProfImg} userId={e.userId} pid={e.pid} flag={flag} />
        })}

      </div>
    </div>
  )
}

export default CommentCard