import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.FIREBASE_SOTRAGE_BUCKET,
  messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.FIREBASE_APP_ID,
};

/** 
const activeApps = firebase.app;
export const app = activeApps.length === 0 ? initializeApp(firebaseConfig) : activeApps[0];
*/
export const app = initializeApp(firebaseConfig, "Computer-Society");