// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestone } from 'firebase/auth'
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6P4vB3EhoLQC6Y9f1BEedoCM9-pLPRvQ",
  authDomain: "myappreactjs.firebaseapp.com",
  projectId: "myappreactjs",
  storageBucket: "myappreactjs.appspot.com",
  messagingSenderId: "739471222561",
  appId: "1:739471222561:web:22ec3da096685ee919c060",
  measurementId: "G-2BSW66HHRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestone(app);
//const analytics = getAnalytics(app);