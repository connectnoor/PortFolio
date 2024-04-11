// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcwjq8Q5cWCCcuHimbX0ePC-PKHux-xUc",
  authDomain: "noor-amin.firebaseapp.com",
  projectId: "noor-amin",
  storageBucket: "noor-amin.appspot.com",
  messagingSenderId: "577660081881",
  appId: "1:577660081881:web:a447a88131b6c10e5310c8",
  measurementId: "G-03V487TR4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);