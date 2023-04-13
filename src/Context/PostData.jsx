import React,{useState,useContext} from "react"
import postContext from "./postContext";


export  function PostData(children)
{

    // const upload={
    //     url,
    //     like,
    //     comment,
    //     userName
    // }

 function uploadVideo()
    {
        console.log("upload video")
    }
const store={uploadVideo}
    return (  <postContext.Provider value={store}>
        {children}
        </postContext.Provider>);

}
