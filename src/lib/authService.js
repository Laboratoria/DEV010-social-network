import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut, signInWithEmailAndPassword,
} from 'firebase/auth';
import app from './firebaseConfig';

const auth = getAuth();
export default app;

/*
const email = 'priyacarito@gmail.com';
const password = 'Firebase.1526';
createUserWithEmailAndPassword(auth, email, password)
  .then((credential) => {
    console.log('user created: ', credential.user);
    alert('User created');
  })
  .catch((err) => {
    console.log(err.message);
  });
*/
const signInForm = document.querySelector('.sign-in');
if (signUpForm) {
  console.log(signUpForm);
  signUpForm.addEventListener('submit', () => {
    console.log(signUpForm.name.value);
    const email = 'priyacarito@gmail.com';
    const password = 'Firebase.1526';

const email = 'priyacarito@gmail.com';
const password = 'Firebase.1526';
signInWithEmailAndPassword(auth, email, password)
  .then((credential) => {
    console.log('user loged in: ', credential.user);
  })
  .catch((err) => {
    console.log(err.message);
  });
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

/*
const signUpForm = document.querySelector('.sign-up');
if (signUpForm) {
  console.log(signUpForm);
  signUpForm.addEventListener('submit', () => {
    console.log(signUpForm.name.value);
    const email = 'priyacarito@gmail.com';
    const password = 'Firebase.1526';
    createUserWithEmailAndPassword(auth, email, password)
      .then((credential) => {
        console.log('user created: ', credential.user);
        signUpForm.reset();
      });
  });
}
*/
