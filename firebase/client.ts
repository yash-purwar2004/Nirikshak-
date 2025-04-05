// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4xqarR8sW9n0zPGXZniiGw0cCBNJnZzA",
  authDomain: "nirikshak-20136.firebaseapp.com",
  projectId: "nirikshak-20136",
  storageBucket: "nirikshak-20136.firebasestorage.app",
  messagingSenderId: "546693434554",
  appId: "1:546693434554:web:10ba808a275eaf3fab4683",
  measurementId: "G-P18F2K403H"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);