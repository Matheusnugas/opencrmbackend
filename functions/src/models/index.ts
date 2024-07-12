import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import Keys from '../constants/keys';
import admin from 'firebase-admin';

const firebaseConfig = {
  apiKey: Keys.FIREBASE_API_KEY,
  authDomain: Keys.FIREBASE_AUTH_DOMAIN,
  projectId: Keys.FIREBASE_PROJECT_ID,
  storageBucket: Keys.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Keys.FIREBASE_MESSAGING_SENDER_ID,
  appId: Keys.FIREBASE_APP_ID,
};

console.log(firebaseConfig)

export const adminApp = admin.initializeApp(firebaseConfig);

initializeApp(firebaseConfig);

const db = getFirestore();

export default db;