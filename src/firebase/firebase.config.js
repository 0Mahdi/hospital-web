// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL78zOvrIoS113RXTY586YIvQpxyooGao",
  authDomain: "apollohospitalapp.firebaseapp.com",
  projectId: "apollohospitalapp",
  storageBucket: "apollohospitalapp.appspot.com",
  messagingSenderId: "593011071107",
  appId: "1:593011071107:web:9f386e1814948805bda3b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  
export default app;