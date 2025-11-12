// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZIA0BJf1l_CeVWCTYOV-ntvpZHxAimK8",
  authDomain: "the-book-haven-59937.firebaseapp.com",
  projectId: "the-book-haven-59937",
  storageBucket: "the-book-haven-59937.firebasestorage.app",
  messagingSenderId: "1019934037579",
  appId: "1:1019934037579:web:753356eef2cba59c255fce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);