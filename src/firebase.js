// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqATDeXXIFt4Er7HMK71ASYcRsHFQnV0Q",
  authDomain: "myblog-f0cd5.firebaseapp.com",
  projectId: "myblog-f0cd5",
  storageBucket: "myblog-f0cd5.appspot.com",
  messagingSenderId: "396500507698",
  appId: "1:396500507698:web:d6e7564407f0f8b5d7702b",
  measurementId: "G-02ZZJKZ7TP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);