// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTYjERP7ZZuLZtpUJIrjm9TFjKxe9ZPi4",
  authDomain: "coolflixgpt.firebaseapp.com",
  projectId: "coolflixgpt",
  storageBucket: "coolflixgpt.appspot.com",
  messagingSenderId: "968288980475",
  appId: "1:968288980475:web:e2f20acfe6b26962454f5e",
  measurementId: "G-86CJKM31H4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
