import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCnXrC-ors0w4r1m9iHqqQwEUG6L9sMmNg",
  authDomain: "linkthi-6c140.firebaseapp.com",
  projectId: "linkthi-6c140",
  storageBucket: "linkthi-6c140.appspot.com",
  messagingSenderId: "153320923156",
  appId: "1:153320923156:web:902905c95885d6dd024701"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();