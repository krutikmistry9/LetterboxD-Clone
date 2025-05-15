import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxi9BtJkKdwggwkF9DWBEvsCgdr7kGkA4",
  authDomain: "letterboxd-clone-a5304.firebaseapp.com",
  projectId: "letterboxd-clone-a5304",
  storageBucket: "letterboxd-clone-a5304.firebasestorage.app",
  messagingSenderId: "241535891635",
  appId: "1:241535891635:web:b3992ad444885d884d18c6",
  measurementId: "G-XJ51HRH6JM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export default app;
export { db, auth };
