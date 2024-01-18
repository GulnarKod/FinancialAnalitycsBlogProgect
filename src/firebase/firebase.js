// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
// Required for side-effects
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTDYymf4fArPL2HSJf0TpKYaxV3iwLlms",
  authDomain: "financialmarketnewsdb.firebaseapp.com",
  projectId: "financialmarketnewsdb",
  storageBucket: "financialmarketnewsdb.appspot.com",
  messagingSenderId: "766129744344",
  appId: "1:766129744344:web:13e73c377f31c7681faaad"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app);