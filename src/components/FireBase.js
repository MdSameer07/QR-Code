import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjWYeVtGjpe2dvjBNf44-ob3d74LYtWSs",
  authDomain: "qr-code-b051d.firebaseapp.com",
  databaseURL: "https://qr-code-b051d-default-rtdb.firebaseio.com",
  projectId: "qr-code-b051d",
  storageBucket: "qr-code-b051d.appspot.com",
  messagingSenderId: "622239346052",
  appId: "1:622239346052:web:f004c774e4aace2c9b81d1",
  measurementId: "G-QJB4Z8F5HS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth};