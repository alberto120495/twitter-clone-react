import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAGHxAmMbrprKu4HR92Bcom0T1fk0v_CAs",
  authDomain: "twitter-clone-eb11d.firebaseapp.com",
  databaseURL: "https://twitter-clone-eb11d.firebaseio.com",
  projectId: "twitter-clone-eb11d",
  storageBucket: "twitter-clone-eb11d.appspot.com",
  messagingSenderId: "703482478578",
  appId: "1:703482478578:web:5fcd9bdf74528e898c756b",
  measurementId: "G-ZJCM9JW8MG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
