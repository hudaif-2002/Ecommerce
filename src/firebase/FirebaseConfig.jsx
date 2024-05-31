// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCVMumlVT4m45klfBIowLpYEK1ZmrxG1h0",
  authDomain: "myfirstapp-394be.firebaseapp.com",
  projectId: "myfirstapp-394be",
  storageBucket: "myfirstapp-394be.appspot.com",
  messagingSenderId: "779521239241",
  appId: "1:779521239241:web:df7726b13d644272d0c518"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB =getFirestore(app);
const auth =getAuth(app);
export {fireDB,auth};