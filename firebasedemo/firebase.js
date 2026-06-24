// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0uoOs_ynTwebPzdlwOYXJCCIXUbpgAYs",
  authDomain: "fir-demo-1d626.firebaseapp.com",
  projectId: "fir-demo-1d626",
  storageBucket: "fir-demo-1d626.firebasestorage.app",
  messagingSenderId: "583553459267",
  appId: "1:583553459267:web:ec4d6bbac45a083ac7e0f6",
  measurementId: "G-N2YQ96LP2H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase.js File");
const analytics = getAnalytics(app);

export const db = {
  "student" : [
    {
      "id" : 200,
      "fname" : "sahil",
      "std" : 9
    },
    {
      "id" : 201,
      "fname" : "Raj",
      "std" : 8
    }
  ]
};