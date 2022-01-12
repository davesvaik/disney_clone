// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import firebase from "firebase";
//import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
//import { getFirestore } from "firebase/firestore";
//import { getAuth, GoogleAuthProvider } from "firebase/auth";
//import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByKxZ2cAWN5QYGbxgMcmwPzWlPI6NkTYY",
    authDomain: "disneyclone-d6cee.firebaseapp.com",
    projectId: "disneyclone-d6cee",
    storageBucket: "disneyclone-d6cee.appspot.com",
    messagingSenderId: "367078174420",
    appId: "1:367078174420:web:6d7107d8e4073117db5541"
  };
 
  
  // Initialize Firebase
  // const firebaseApp = initializeApp(firebaseConfig);
  // const db = getFirestore(firebaseApp);
  // const auth = getAuth(firebaseApp);
  // const provider = new auth.GoogleAuthProvider();
  // const storage = getStorage();

  // export { auth, provider, storage };
  // export default db;
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;