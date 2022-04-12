import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyDZgpWuuPn5_2HiyV4x80IqhDZsuLV3KXs",
        authDomain: "catch-amy.firebaseapp.com",
        databaseURL: "https://catch-amy-default-rtdb.firebaseio.com",
    }
);

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;

