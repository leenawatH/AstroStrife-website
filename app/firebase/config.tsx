
import { initializeApp , getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD2uvvpSN5HMGLY2eERYjXnAas0yX6nR8U",
    authDomain: "astrostrife-70647.firebaseapp.com",
    projectId: "astrostrife-70647",
    storageBucket: "astrostrife-70647.appspot.com",
    messagingSenderId: "932324803763",
    appId: "1:932324803763:web:59427850d25854be071cc6",
    measurementId: "G-CKEE8514HG"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const auth = getAuth(app)

const firestore = getFirestore(app)


export { app , auth , firestore }