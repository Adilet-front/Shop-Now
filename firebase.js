// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRBiqmlpnqUnPr8foShwk8MvEPKsqH2Es",
  authDomain: "shopnow-8550e.firebaseapp.com",
  projectId: "shopnow-8550e",
  storageBucket: "shopnow-8550e.firebasestorage.app",
  messagingSenderId: "638178732835",
  appId: "1:638178732835:web:7d5403b89af6d7551b3a96"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 



import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export { signInWithPopup, createUserWithEmailAndPassword, updateProfile };
export const db = getFirestore(app);
export { collection, addDoc };