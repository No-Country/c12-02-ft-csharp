// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz6yTtoHqQA7pHTVH2lBywPI_bh0DXXhE",
  authDomain: "ecommerce-f6708.firebaseapp.com",
  projectId: "ecommerce-f6708",
  storageBucket: "ecommerce-f6708.appspot.com",
  messagingSenderId: "162284062127",
  appId: "1:162284062127:web:5b565788b452985e59db5a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
