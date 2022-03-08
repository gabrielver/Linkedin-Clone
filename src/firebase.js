// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvrv8sImaicGSt1XzVHB4xFpOmVFPsNqM",
  authDomain: "linkedin-clone-c192c.firebaseapp.com",
  projectId: "linkedin-clone-c192c",
  storageBucket: "linkedin-clone-c192c.appspot.com",
  messagingSenderId: "898056285396",
  appId: "1:898056285396:web:0b367421558559229e1f41",
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
