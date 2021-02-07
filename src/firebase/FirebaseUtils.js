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

//Retrieve user from Firestore / add new user
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

//Google auth config
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
