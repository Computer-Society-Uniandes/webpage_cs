import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAKfmbx2Aau6CkH7oVINDs0H1N-xlfoKYY",
  authDomain: "computer-society-webpage.firebaseapp.com",
  projectId: "computer-society-webpage",
  storageBucket: "computer-society-webpage.appspot.com",
  messagingSenderId: "186300038387",
  appId: "1:186300038387:web:a5f137f4b858b8a75c8b86",
  measurementId: "G-PRZ7J1Q5N3"
};

export const app = initializeApp(firebaseConfig, "Computer-Society");