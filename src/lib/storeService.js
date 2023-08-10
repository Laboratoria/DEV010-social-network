import {
  getFirestore, collection, onSnapshot,
  getDocs,
  addDoc, deleteDoc, doc,
  query, where,
  orderBy, serverTimestamp, FieldValue,
} from 'firebase/firestore';

// init store service
export const db = getFirestore();

// collection ref
export const colRef = collection(db, 'post');

// queries
const q = query(colRef, orderBy('createdAt'));

// get real time collection data with a filter
onSnapshot(q, (snapshot) => {
  const posts = [];
  snapshot.docs.forEach((document) => {
    posts.push({ ...document.data(), id: document.id });
  });
  console.log(posts);
});

/*
// queries
const q = query(colRef, where('pass', '==', 'me'), orderBy('text', 'desc'));

// get real time collection data with a filter
onSnapshot(q, (snapshot) => {
  const posts = [];
  snapshot.docs.forEach((document) => {
    posts.push({ ...document.data(), id: document.id });
  });
  console.log(posts);
});

// queries
const q = query(colRef, where('pass', '==', 'me'));

// get real time collection data with a filter
onSnapshot(q, (snapshot) => {
  const posts = [];
  snapshot.docs.forEach((document) => {
    posts.push({ ...document.data(), id: document.id });
  });
  console.log(posts);
});

// get real time collection data
onSnapshot(colRef, (snapshot) => {
  const posts = [];
  snapshot.docs.forEach((document) => {
    posts.push({ ...document.data(), id: document.id });
  });
  console.log(posts);
});

// get static collection data
getDocs(colRef)
  .then((snapshot) => {
    const posts = [];
    snapshot.docs.forEach((document) => {
      posts.push({ ...document.data(), id: document.id });
    });
    console.log(posts);
  })
  .catch((err) => {
    console.log(err.message);
  });
*/

// add post
addDoc(colRef, {
  text: 'Kiss',
  pass: 'me',
  createdAt: FieldValue.serverTimestamp(),
})
  .then(() => {
    alert('Created');
  });
/*
// delete post
const docRef = doc(db, 'post', 'LzeicGshkLbpcmzgtiGU');

deleteDoc(docRef).then(() => {
  alert('Deleted');
});
*/
