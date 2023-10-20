import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBtNOcRqPQ8Cr-_l9Pf_wo7BhhbkKhI2Q8",
  authDomain: "proyectofinal-1d71a.firebaseapp.com",
  projectId: "proyectofinal-1d71a",
  storageBucket: "proyectofinal-1d71a.appspot.com",
  messagingSenderId: "401582880763",
  appId: "1:401582880763:web:b81bed43e52a2da1a4bd5e"
};

initializeApp(firebaseConfig);

export const db = getFirestore()