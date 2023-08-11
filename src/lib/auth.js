import {
  createUserWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider,
  signOut, signInWithEmailAndPassword,
} from 'firebase/auth';
import { createUserStore } from './store';
import { auth } from './firebaseConfig';

const provider = new GoogleAuthProvider();

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
      console.log('user loged in: ', credential.user);
    })
    .catch((err) => {
      alert(err.message);
    });
}

function signInAuthGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
    // El usuario ha iniciado sesión con éxito
      const user = result.user;
      console.log(user.email);
      // Puedes acceder a la información del usuario a través de la variable user
      createUserStore(user.email, 'thePassword');
    })
    .catch((error) => {
      // Ocurrió un error durante el inicio de sesión con Google
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // Maneja el error adecuadamente
      alert(error.message);
    });
}

function signOutAuth() {
  signOut(auth)
    .then(() => {
      console.log('The user signed out');
      alert('User sign out');
    })
    .catch((err) => {
      console.log(err.message);
    });
}

export {
  signUpAuth, signInAuth, signInAuthGoogle, signOutAuth,
};
