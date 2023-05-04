import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA4JklryGu267infqjwARFLjzZej45bR8g",
  authDomain: "intercolegiales-7e519.firebaseapp.com",
  projectId: "intercolegiales-7e519",
  storageBucket: "intercolegiales-7e519.appspot.com",
  messagingSenderId: "34754066101",
  appId: "1:34754066101:web:8cdb31d5cf046eceb970fc",
  measurementId: "G-K2ZYGKNB1M"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

export default firebaseApp;