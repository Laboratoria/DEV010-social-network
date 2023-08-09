// Este es el punto de entrada de tu aplicacion

import firebase from 'firebase/compat/app';
import { myFunction } from './lib/index.js';
// Importar bibliotecas de MongoDB
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();

export { auth, storage, db };

myFunction();
