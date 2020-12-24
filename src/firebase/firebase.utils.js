import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCC6AzeLU5WCg0KnKzHQfgFKqcfe48lcfI',
  authDomain: 'crown-db-a4ab5.firebaseapp.com',
  databaseURL: 'https://crown-db-a4ab5.firebaseio.com',
  projectId: 'crown-db-a4ab5',
  storageBucket: 'crown-db-a4ab5.appspot.com',
  messagingSenderId: '512671240360',
  appId: '1:512671240360:web:82d4b0cd4b6cc517fb729d',
  measurementId: 'G-VKBJ8SQTNZ',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

// const facebookProvider = new firebase.auth.FacebookAuthProvider();
// facebookProvider.setCustomParameters({
//   display: 'popup',
// });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
// export const signInWithFacebook = () =>
//   firebase.auth().signInWithPopup(facebookProvider);

export default firebase;


