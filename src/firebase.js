// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBytL5DKOPR7tgDmzhSCIL2Azb8BNDFeSE',
  authDomain: 'email-c3789.firebaseapp.com',
  projectId: 'email-c3789',
  storageBucket: 'email-c3789.appspot.com',
  messagingSenderId: '997904041823',
  appId: '1:997904041823:web:16099db6aac96a112ad8ea',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
