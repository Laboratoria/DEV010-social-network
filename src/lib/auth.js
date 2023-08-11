import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut, signInWithEmailAndPassword,
} from 'firebase/auth';
import { createUserStore } from './store';
import { auth } from './firebaseConfig';

/**
 * Sign Up
 * It's for register a user into the platform (using firebase/auth)
 * @param {string} theEmail :create account by email
 * @param {string} thePassword :create accout by email and password
 */
function signUpAuth(theEmail, thePassword) {
  createUserWithEmailAndPassword(auth, theEmail, thePassword)
    .then((Credential) => {
      console.log(Credential);
      console.log(auth.currentUser.uid);
      alert(`User created for the email ${theEmail}`);
    })
    .then(() => {
      createUserStore(theEmail, thePassword);
    })
    .then(() => 1)
    .catch((err) => {
      alert(err.message.split('Firebase: ')[1]);
      return -1;
    });
  // export const dataJson = async function storeResponse(dir) {
  //   const response = await fetch(dir);
  //   if (response.status !== 200) {
  //     throw new Error('Hubo un problema accediendo al dataset.');
  //   }
  //   return await response.json();
  // }
}

function signInAuth(theEmail, thePassword) {
  signInWithEmailAndPassword(auth, theEmail, thePassword)
    .then((credential) => {
      // console.log('user loged in: ', credential.user);
      alert(`User has been created with the email ${theEmail}`);
    })
    .catch((err) => {
    // console.log(err.message);
      alert(err.message.split('Firebase: ')[1]);
    });
}

/*
signOut(auth)
  .then(() => {
      console.log('The user signed out');
      alert('User sign out')
  })
  .catch((err) => {
      console.log(err.message);
  });
*/

export { createUserAuth };
