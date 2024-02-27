// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";



// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCNZ8v4qE-g7dDXZ7bmCdhEkwPfBbkC6Mo",
  authDomain: "blair-with.firebaseapp.com",
  projectId: "blair-with",
  storageBucket: "blair-with.appspot.com",
  messagingSenderId: "357215071097",
  appId: "1:357215071097:web:750968c1ad994a5a059da8"
};

// Initialize Firebase

const FirebaseApp = initializeApp(firebaseConfig);
export { FirebaseApp };


export const db = getFirestore(FirebaseApp);
export const auth = getAuth(FirebaseApp)