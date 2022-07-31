import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJxN9eQzwbX4urBeSmEBkddmCeVIJbn0g",
  authDomain: "tour-me-ac165.firebaseapp.com",
  projectId: "tour-me-ac165",
  storageBucket: "tour-me-ac165.appspot.com",
  messagingSenderId: "594468207407",
  appId: "1:594468207407:web:475d7d8ec165088b2d7fda",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
