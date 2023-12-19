// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW9LdloO3C9TV8EAqupXa9WQsZVYeQPg4",
  authDomain: "vite-contact-5e778.firebaseapp.com",
  projectId: "vite-contact-5e778",
  storageBucket: "vite-contact-5e778.appspot.com",
  messagingSenderId: "515959471468",
  
  appId: "1:515959471468:web:077d1c435a3e77ae34c749",
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);