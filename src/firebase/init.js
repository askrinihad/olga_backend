
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABUwTZ94Jilv6FZoIeP1p5LB0LS0cwXAU",
  authDomain: "olga-6a1a7.firebaseapp.com",
  projectId: "olga-6a1a7",
  storageBucket: "olga-6a1a7.appspot.com",
  messagingSenderId: "522766382109",
  appId: "1:522766382109:web:4459b529d372337a8702f4",
  measurementId: "G-T1E1QNSVXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const db=getFirestore(app)
console.log("Firestore instance:", db);


