// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM5aJ-I9ajNnBft5xKidA_jT9ygoHMDZM",
  authDomain: "aitravel-b2108.firebaseapp.com",
  projectId: "aitravel-b2108",
  storageBucket: "aitravel-b2108.appspot.com",
  messagingSenderId: "766535292044",
  appId: "1:766535292044:web:1f91650dc742f8fad397a9",
  measurementId: "G-W42LC06RQ7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);