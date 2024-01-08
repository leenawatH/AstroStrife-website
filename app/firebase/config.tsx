
import { initializeApp , getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_apiKey,
  authDomain: process.env.NEXT_authDomain,
  projectId: process.env.NEXT_projectId,
  storageBucket: process.env.NEXT_storageBucket,
  messagingSenderId: process.env.NEXT_messagingSenderId,
  appId: process.env.NEXT_appId,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const auth = getAuth(app)

export { app , auth }