// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4EPriAiaz3A8bvKlGPmruSSqgl3s6XnY",
  authDomain: "novelize-d2cde.firebaseapp.com",
  projectId: "novelize-d2cde",
  storageBucket: "novelize-d2cde.appspot.com",
  messagingSenderId: "269126080135",
  appId: "1:269126080135:web:319d3ff7a10c685c49ca22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app; // Export the 'app' object as default
