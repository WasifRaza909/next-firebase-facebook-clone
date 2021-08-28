import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAHSiO_HWLXNrsouIq95nRTF0D6J8ZbO3w',
  authDomain: 'facebook-clone909.firebaseapp.com',
  projectId: 'facebook-clone909',
  storageBucket: 'facebook-clone909.appspot.com',
  messagingSenderId: '47236898845',
  appId: '1:47236898845:web:58c744a1fd40b3c34ce6f4',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
