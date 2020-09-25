import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8H09SnASqX1CMsnX2Q8QvH10nPdszX1E",
  authDomain: "slimline-4b4fe.firebaseapp.com",
  databaseURL: "https://slimline-4b4fe.firebaseio.com",
  projectId: "slimline-4b4fe",
  storageBucket: "slimline-4b4fe.appspot.com",
  messagingSenderId: "414670518414",
  appId: "1:414670518414:web:89cb2587972bf7689d31df",
  measurementId: "G-V5CR3EHLG3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const FirebaseFactory = () => {
  let auth = firebase.auth();
  return {
    auth,

    create(email: string, password: string) {
      return auth.createUserWithEmailAndPassword(email, password);
    },

    login(email: string, password: string) {
      return auth.signInWithEmailAndPassword(email, password);
    },

    logout() {
      return auth.signOut();
    },
  };
};

export default FirebaseFactory();
