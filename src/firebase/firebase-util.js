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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
