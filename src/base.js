// ***** from video *****
// import Rebase from "re-base";
// import firebase from "firebase";

// ***** from Slack, maybe try importing theses *******
import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';


// ****** Warning in Console Log ********
// It looks like you're using the development build of the Firebase JS SDK.
// When deploying Firebase apps to production, it is advisable to only import
// the individual SDK components you intend to use.

// For the module builds, these are available in the following manner
// (replace <PACKAGE> with the name of a component - i.e. auth, database, etc):

// CommonJS Modules:
// const firebase = require('firebase/app');
// require('firebase/<PACKAGE>');
// *******


const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyDZgpWuuPn5_2HiyV4x80IqhDZsuLV3KXs",
        authDomain: "catch-amy.firebaseapp.com",
        databaseURL: "https://catch-amy-default-rtdb.firebaseio.com",
    }
);

const base = Rebase.createClass(firebaseApp.database());

//this is a named export 
export { firebaseApp };

//this is a default export
export default base;

