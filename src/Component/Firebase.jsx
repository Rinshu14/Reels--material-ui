// Import the functions you need from the SDKs you need
// import { firebase } from "firebase/app";
import firebase from "firebase/compat/app"
// import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
import "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVpc1nB-gW7Z0Ai9DqvrpkSH9TFFJ0giQ",
  authDomain: "reels-new-fae3e.firebaseapp.com",
  projectId: "reels-new-fae3e",
  storageBucket: "reels-new-fae3e.appspot.com",
  messagingSenderId: "574974781875",
  appId: "1:574974781875:web:aee861b8d4a8b441f1c3c6",
  measurementId: "G-V869JBELBC"
};

// Initialize Firebase
// initializeApp(firebaseConfig);
//firebase.initializeApp(firebaseConfig)
const app = firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth;
export const store =firebase.storage;
export const database = getFirestore(app);

//const analytics = getAnalytics(app);