// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB84zYf61f_SwieB_wFHfYzloymA6BXFnQ",
  authDomain: "house-marketplace-app-7ef61.firebaseapp.com",
  projectId: "house-marketplace-app-7ef61",
  storageBucket: "house-marketplace-app-7ef61.appspot.com",
  messagingSenderId: "879334105631",
  appId: "1:879334105631:web:b7f33a5e6f90f03c41ab2a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()