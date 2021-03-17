import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABouPV04qUL-LNpOiNNi8WwpdDCWmEvTM",
  authDomain: "nwitter-8b1dd.firebaseapp.com",
  projectId: "nwitter-8b1dd",
  storageBucket: "nwitter-8b1dd.appspot.com",
  messagingSenderId: "196690237257",
  appId: "1:196690237257:web:145b167a5178f77968ac98"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();