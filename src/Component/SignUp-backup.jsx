import * as React from 'react';

import "./SignUp.css"
//https://www.google.com/imgres?imgurl=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F03%2FInstagram_Logo_2016.png&imgrefurl=https%3A%2F%2Flogos-download.com%2F1210-instagram-logo-download.html&tbnid=4FErQLLH_jiG7M&vet=12ahUKEwiW4vqJw9f8AhW3x6ACHY4bBrkQMyhkegUIARDWAQ..i&docid=gms30mzBQr-axM&w=5000&h=1418&q=instagram%20image&ved=2ahUKEwiW4vqJw9f8AhW3x6ACHY4bBrkQMyhkegUIARDWAQ

export default function SignUp() {
  return (
   <div className="signUpWrapper">
    <div className="signUp" >
    <h1>Instagram</h1>
    {/* <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F03%2FInstagram_Logo_2016.png&imgrefurl=https%3A%2F%2Flogos-download.com%2F1210-instagram-logo-download.html&tbnid=4FErQLLH_jiG7M&vet=12ahUKEwiW4vqJw9f8AhW3x6ACHY4bBrkQMyhkegUIARDWAQ..i&docid=gms30mzBQr-axM&w=5000&h=1418&q=instagram%20image&ved=2ahUKEwiW4vqJw9f8AhW3x6ACHY4bBrkQMyhkegUIARDWAQ"></img> */}
    <p>sign up to upload your videos and photos</p>
     <input type="email" placeholder="Email"></input>
     <input type="Password" placeholder="Password"></input>
     <input type="text" placeholder="Full Name"></input>

     <button>sign up</button>
     <p>By signing up ,You agree to our terms,Data Policy and Cookies Policy</p>


   </div>
   {/* <p> Have an account ? Log in</p> */}
   <button>Have an account ? Log in</button>
   </div>
    
  );
}


