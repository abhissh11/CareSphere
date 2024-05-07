import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const fireKey = `${process.env.API_KEY}`;
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase app if not already initialized

let firebaseApp;
if (!initializeApp?.apps?.length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = initializeApp.apps[0];
}
// Get the auth object
export const auth = getAuth();
// Export the initialized Firebase app
export default firebaseApp;
