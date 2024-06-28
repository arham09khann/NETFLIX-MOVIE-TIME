// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUT0hzxvCcwkRVu8x1zGgr2ZytzkDzfnY",
  authDomain: "exporing-netflix.firebaseapp.com",
  projectId: "exporing-netflix",
  storageBucket: "exporing-netflix.appspot.com",
  messagingSenderId: "164095263240",
  appId: "1:164095263240:web:f8f32135e5f1aded03c7bd",
  measurementId: "G-NHXS67TSWV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
