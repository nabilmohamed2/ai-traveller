// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-IrZzxRKpGYCZSnfGtXM4vqPBAIlkSLw",
  authDomain: "ai-trip-planner-2555.firebaseapp.com",
  projectId: "ai-trip-planner-2555",
  storageBucket: "ai-trip-planner-2555.firebasestorage.app",
  messagingSenderId: "1089984980263",
  appId: "1:1089984980263:web:23a7a563beab5009a9f502",
  measurementId: "G-T2E6VWLRRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
//Firestore database
export const db = getFirestore(app);