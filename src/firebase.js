// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";

import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getStorage} from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkMlNMqKKc9tRdxlA_2-3k88SzWkpJsO0",
  authDomain: "react-social-media-96aad.firebaseapp.com",
  projectId: "react-social-media-96aad",
  storageBucket: "react-social-media-96aad.appspot.com",
  messagingSenderId: "220180465194",
  appId: "1:220180465194:web:9b60fcbad0b9e88c052553",
  measurementId: "G-S332HJZPF5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export default db;
export {auth, provider, storage};


