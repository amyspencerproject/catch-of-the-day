import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDmh5qFRY-fhpK54jz50LZ7tOd22krqmIE",
  authDomain: "catch-two-877f0.firebaseapp.com",
  databaseURL: "https://catch-two-877f0-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
