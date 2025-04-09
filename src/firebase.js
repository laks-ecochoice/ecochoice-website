// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQb__6dEeJ0QJs1o1jkSa6ig5OUC7hays",
  authDomain: "ecochoice-website-640e3.firebaseapp.com",
  projectId: "ecochoice-website-640e3",
  storageBucket: "ecochoice-website-640e3.firebasestorage.app",
  messagingSenderId: "768653547044",
  appId: "1:768653547044:web:d5fefe2bfef2811373eab1",
  measurementId: "G-PF70C04PQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };