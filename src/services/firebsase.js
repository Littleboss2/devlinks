
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCkfE4SBthHvGL83uz_g6I4GmQxTbJJx-w",
  authDomain: "devlinks-27161.firebaseapp.com",
  projectId: "devlinks-27161",
  storageBucket: "devlinks-27161.appspot.com",
  messagingSenderId: "319781751592",
  appId: "1:319781751592:web:2859dc313efb6501f05e1d",
  measurementId: "G-YY0XB8XT8V"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);

export { db, auth };