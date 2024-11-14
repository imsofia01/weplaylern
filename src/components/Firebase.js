// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGZ0-LhheFa4-dSgBbz7hTq9ING0fu1Kc",
  authDomain: "weplaylearn-78a32.firebaseapp.com",
  projectId: "weplaylearn-78a32",
  storageBucket: "weplaylearn-78a32.firebasestorage.app",
  messagingSenderId: "999526520534",
  appId: "1:999526520534:web:c720ea161e464ded9e1b77"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)



