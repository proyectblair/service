// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


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
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);