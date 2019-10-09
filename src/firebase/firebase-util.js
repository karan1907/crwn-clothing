import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD5g-hYq6kBxbESa7ZPEWqv5_UjihwRr1w",
  authDomain: "crwn-db-3c07d.firebaseapp.com",
  databaseURL: "https://crwn-db-3c07d.firebaseio.com",
  projectId: "crwn-db-3c07d",
  storageBucket: "",
  messagingSenderId: "795813366762",
  appId: "1:795813366762:web:89757b53257332f8ed0093",
  measurementId: "G-FM3LMT91EB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
