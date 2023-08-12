import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

interface ImportMetaEnvWithFirebase extends ImportMetaEnv {
  VITE_FIREBASE_API_KEY: string;
  VITE_FIREBASE_AUTH_DOMAIN: string;
  VITE_FIREBASE_PROJECT_ID: string;
  VITE_FIREBASE_STORAGE_BUCKET: string;
  VITE_FIREBASE_MESSEGING_SENDER_ID: string;
  VITE_FIREBASE_APP_ID: string;
}

const importMeta = import.meta.env as ImportMetaEnvWithFirebase;

const firebaseConfig = {
  apiKey: importMeta.VITE_FIREBASE_API_KEY,
  authDomain: importMeta.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: importMeta.VITE_FIREBASE_PROJECT_ID,
  storageBucket: importMeta.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: importMeta.VITE_FIREBASE_MESSEGING_SENDER_ID,
  appId: importMeta.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
