import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCAVBpUstvxx2EaAvSYSqq3Hu3Zi7lEsp0",
  authDomain: "training-app-a8a4d.firebaseapp.com",
  projectId: "training-app-a8a4d",
  storageBucket: "training-app-a8a4d.appspot.com",
  messagingSenderId: "121323891013",
  appId: "1:121323891013:web:469174339e6535157a362c",
  measurementId: "G-C4LT11M977",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export {db, auth};