// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmiG8b1ZpTijwFkNl6mHRsD5Pdt2vyaHQ",
  authDomain: "mental-health-bbd32.firebaseapp.com",
  projectId: "mental-health-bbd32",
  storageBucket: "mental-health-bbd32.appspot.com",
  messagingSenderId: "721119520518",
  appId: "1:721119520518:web:364de3b1e8baae90b7e087"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);