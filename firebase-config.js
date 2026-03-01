import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

//This is for database
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// our keys
const firebaseConfig = {
  apiKey: "AIzaSyCgBQe-OxkpaaLXEEqd_vhdsp0Vc69_qhU",
  authDomain: "apex-accounts-d937d.firebaseapp.com",
  projectId: "apex-accounts-d937d",
  storageBucket: "apex-accounts-d937d.firebasestorage.app",
  messagingSenderId: "73322248573",
  appId: "1:73322248573:web:ffa8373e93b032dfeb7414"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
//for database
export const db = getFirestore(app);