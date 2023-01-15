import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDwHDBQksTPoRpKpZtjH5yTyqcWJcSCPg",
  authDomain: "fir-crud-8397f.firebaseapp.com",
  projectId: "fir-crud-8397f",
  storageBucket: "fir-crud-8397f.appspot.com",
  messagingSenderId: "960904674635",
  appId: "1:960904674635:web:d0afe0b96bdd64f7623cce"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}; 
