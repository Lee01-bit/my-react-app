// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe7o-XXxzibp4n5LOfn6Xt5lFLJPjdfrc",
  authDomain: "food-emporium-f437a.firebaseapp.com",
  projectId: "food-emporium-f437a",
  storageBucket: "food-emporium-f437a.firebasestorage.app",
  messagingSenderId: "117700181217",
  appId: "1:117700181217:web:03acf91ee3f628351a8ba0",
  measurementId: "G-KTXV90ZY8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);