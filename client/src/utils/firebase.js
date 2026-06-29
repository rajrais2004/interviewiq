import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-a23b0.firebaseapp.com",
  projectId: "interviewiq-a23b0",
  storageBucket: "interviewiq-a23b0.firebasestorage.app",
  messagingSenderId: "762819792072",
  appId: "1:762819792072:web:dd91dc33e5cc3be45fe9fd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider }