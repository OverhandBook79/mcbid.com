import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyC_9D75hRnrolnotXeHRhr9V4HrTycoShE",
  authDomain: "mcbid-5e308.firebaseapp.com",
  projectId: "mcbid-5e308",
  storageBucket: "mcbid-5e308.appspot.com",
  messagingSenderId: "1088146411382",
  appId: "1:1088146411382:web:114b4d4966ec7034cc7457",
  measurementId: "G-69JVRSH00P"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, auth, firestore, storage }