import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNu0A6bDZLIrKKbZRjRWMy_AcTsZbzuas",
  authDomain: "codingo-6a0a9.firebaseapp.com",
  projectId: "codingo-6a0a9",
  storageBucket: "codingo-6a0a9.firebasestorage.app",
  messagingSenderId: "333799580823",
  appId: "1:333799580823:web:3196cc73dbfcf51dab75d2",
  measurementId: "G-SZ5SV2CMTB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db }; 