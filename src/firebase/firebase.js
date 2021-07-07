import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCZ-EBPuyj9npSVCXR7jnoSSb4zdMz0FY",
  authDomain: "sweetshop-a6156.firebaseapp.com",
  projectId: "sweetshop-a6156",
  storageBucket: "sweetshop-a6156.appspot.com",
  messagingSenderId: "498046004367",
  appId: "1:498046004367:web:5856430645e3ddc1ef94fa",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()
export { db, googleAuthProvider,facebookAuthProvider
  , firebase };

