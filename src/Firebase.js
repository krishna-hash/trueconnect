import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvfZLaizBTkv37rHTbm_EJ6dUk1THTJms",
    authDomain: "trueconnect-6d211.firebaseapp.com",
    projectId: "trueconnect-6d211",
    storageBucket: "trueconnect-6d211.appspot.com",
    messagingSenderId: "532410704668",
    appId: "1:532410704668:web:238d2383dd51b2012dd0d9",
    measurementId: "G-W081MK800V"
  };
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;