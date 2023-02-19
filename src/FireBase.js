
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAGXs3Ee_Gc8MtX5u5fwh73Y9mIcoL0S9A",
  authDomain: "qr-code-e018c.firebaseapp.com",
  projectId: "qr-code-e018c",
  storageBucket: "qr-code-e018c.appspot.com",
  messagingSenderId: "204557914104",
  appId: "1:204557914104:web:08767ca2d4535cc4edd00d",
  measurementId: "G-SLKG9Z51PP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()

export {app,auth}