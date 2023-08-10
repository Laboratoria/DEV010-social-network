import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAwVtSr_T-F2EdXiJDU5ymkA6raIOPDcpQ',
  authDomain: 'electro-net.firebaseapp.com',
  projectId: 'electro-net',
  storageBucket: 'electro-net.appspot.com',
  messagingSenderId: '719842072317',
  appId: '1:719842072317:web:acaa0a8aa4d2e76cf19094',
};

// init firebase app
const app = initializeApp(firebaseConfig);

export default app;
