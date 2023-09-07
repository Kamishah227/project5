// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8hBq1AgWonlbzaFS76u25A393CR7VU4E",
  authDomain: "vite-contact-b97a7.firebaseapp.com",
  projectId: "vite-contact-b97a7",
  storageBucket: "vite-contact-b97a7.appspot.com",
  messagingSenderId: "126771753687",
  appId: "1:126771753687:web:2737266a36caac64d2b692",
  measurementId: "G-EPP2QTNTRX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
const analytics = getAnalytics(app);