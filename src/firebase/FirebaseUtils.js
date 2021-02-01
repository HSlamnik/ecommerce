import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAYFmocYaIsHTlLCW9ZdmbCkW6RH4aAUxo',
  authDomain: 'ecommerce-5db35.firebaseapp.com',
  projectId: 'ecommerce-5db35',
  storageBucket: 'ecommerce-5db35.appspot.com',
  messagingSenderId: '517269412330',
  appId: '1:517269412330:web:a380fb54b86d7f3731fa93',
  measurementId: 'G-4XYNG1YZ14',
};

firebase.initializeApp(config);

//Google auth config
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
