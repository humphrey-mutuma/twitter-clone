import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOe8yPGLRjjZfLBIrKH539pYybtacC3MA",
  authDomain: "twitter-clone-c85a2.firebaseapp.com",
  projectId: "twitter-clone-c85a2",
  storageBucket: "twitter-clone-c85a2.appspot.com",
  messagingSenderId: "695828651501",
  appId: "1:695828651501:web:0fece0edd511b9500f9be4",
  measurementId: "G-XJRHHLE6QW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
