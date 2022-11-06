import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyAJNUeU3gjwnEsVPjjIYMrLRnqS27mgzso",
    authDomain: "chat4siskin.firebaseapp.com",
    projectId: "chat4siskin",
    storageBucket: "chat4siskin.appspot.com",
    messagingSenderId: "44237076632",
    appId: "1:44237076632:web:0640acb03d83c9278878ed"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()