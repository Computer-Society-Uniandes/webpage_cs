import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAKfmbx2Aau6CkH7oVINDs0H1N-xlfoKYY",
  authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.FIREBASE_APP_ID,
  measurementId: import.meta.env.FIREBASE_MEASUREMENT_ID
};

export const app = initializeApp(firebaseConfig, "Computer-Society");