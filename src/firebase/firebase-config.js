import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAEs7SVbuo6P3uVpmwURFEQKTqruJsD84g',
  authDomain: 'test-cb985.firebaseapp.com',
  projectId: 'test-cb985',
  storageBucket: 'test-cb985.appspot.com',
  messagingSenderId: '443020863307',
  appId: '1:443020863307:web:c09d01fbf2ad2b7034aace',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export {
  auth,
  db,
  provider,
};
