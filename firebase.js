import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  onAuthStateChanged, 
} from "firebase/auth";

import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRBiqmlpnqUnPr8foShwk8MvEPKsqH2Es",
  authDomain: "shopnow-8550e.firebaseapp.com",
  projectId: "shopnow-8550e",
  storageBucket: "shopnow-8550e.appspot.com",
  messagingSenderId: "638178732835",
  appId: "1:638178732835:web:7d5403b89af6d7551b3a96",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();

export {
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  onAuthStateChanged, 
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
  updateDoc,
};

