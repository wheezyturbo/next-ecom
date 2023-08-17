// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyewCX5i4y9LPQyhemN32ndaANLxdUQ7w",
  authDomain: "next-ecom-af6af.firebaseapp.com",
  projectId: "next-ecom-af6af",
  storageBucket: "next-ecom-af6af.appspot.com",
  messagingSenderId: "773443820232",
  appId: "1:773443820232:web:39bb1cd79809905846a3fd",
  measurementId: "G-K2ZW4MQDK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);