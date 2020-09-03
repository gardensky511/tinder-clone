import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDoILBHMzA-Zg0oy7yqBjTbk75Vt_-dYRg",
  authDomain: "tinder-clone-3f038.firebaseapp.com",
  databaseURL: "https://tinder-clone-3f038.firebaseio.com",
  projectId: "tinder-clone-3f038",
  storageBucket: "tinder-clone-3f038.appspot.com",
  messagingSenderId: "956153034484",
  appId: "1:956153034484:web:befe2a629504c8034c10a1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
