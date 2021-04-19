import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaFF7OzBVNmjk8hvn7Im3AGDPdzMWuCks",
    authDomain: "login-app-a3031.firebaseapp.com",
    databaseURL: "https://login-app-a3031.firebaseio.com",
    projectId: "login-app-a3031",
    storageBucket: "login-app-a3031.appspot.com",
    messagingSenderId: "648292646507",
    appId: "1:648292646507:web:6353a16d717ccc03233b2e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
