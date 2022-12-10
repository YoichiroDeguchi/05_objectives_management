import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    authDomain: "objectives-management.firebaseapp.com",
    projectId: "objectives-management",
    storageBucket: "objectives-management.appspot.com",
    messagingSenderId: "708207163671",
    appId: "1:708207163671:web:f8c0d5a696666b3a6ddf52"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default db;
export { auth, provider };