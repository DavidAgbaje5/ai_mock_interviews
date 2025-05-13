import { initializeApp, getApp, getApps} from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBFUL4dCdAYds0uv7VyEQj7lfIMxWp11Mg",
    authDomain: "prepwise-4b4c7.firebaseapp.com",
    projectId: "prepwise-4b4c7",
    storageBucket: "prepwise-4b4c7.firebasestorage.app",
    messagingSenderId: "848162875441",
    appId: "1:848162875441:web:a329fe5374fd7c60484d10",
    measurementId: "G-DWDDS2TJ11"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
