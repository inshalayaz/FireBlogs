import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB81znMEnaa3IWNWjexX9uI3ErBek16c0Q",
  authDomain: "fireblogs-82aa4.firebaseapp.com",
  projectId: "fireblogs-82aa4",
  storageBucket: "fireblogs-82aa4.appspot.com",
  messagingSenderId: "1025405070896",
  appId: "1:1025405070896:web:c9f93c07ea4becc87407f5",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
