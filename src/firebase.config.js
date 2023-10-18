// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjGcp6pbNE0qp4kbRys-nsdGiqLl1IG0M",
  authDomain: "my-ten-assignment.firebaseapp.com",
  projectId: "my-ten-assignment",
  storageBucket: "my-ten-assignment.appspot.com",
  messagingSenderId: "150854694513",
  appId: "1:150854694513:web:69bb35cdc3c7e5ffce0dd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);