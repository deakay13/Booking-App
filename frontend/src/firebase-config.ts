// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDixVLYFA6brdE15TR0atui4ai0MqAf5GE",
  authDomain: "react-webapp-e2c83.firebaseapp.com",
  projectId: "react-webapp-e2c83",
  storageBucket: "react-webapp-e2c83.firebasestorage.app",
  messagingSenderId: "815895548537",
  appId: "1:815895548537:web:ee73fca9477568a89c3aa8",
  measurementId: "G-8GTK763NW7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
