import {
  getFirestore, collection, onSnapshot,
  getDocs,
  addDoc, deleteDoc, doc,
  query, where,
  orderBy, serverTimestamp,
  getDoc,
  updateDoc,
} from 'firebase/firestore';

// init store service
export const db = getFirestore();

// collection ref
export const colRef = collection(db, 'post');

// queries
const q = query(colRef, orderBy('createdAt'));

/*
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

/*
// add post
addDoc(colRef, {
  text: 'ueen',
  pass: 'you',
  createdAt: serverTimestamp(),
})
  .then(() => {
    alert('Created');
  });

// delete post
const docRef = doc(db, 'post', 'LzeicGshkLbpcmzgtiGU');

deleteDoc(docRef).then(() => {
  alert('Deleted');
});
*/

/*
// get one doc by its id and subscribe to its change
const docRef = doc(db, 'post', 'HwZlpQabPH3XodOY9Z7W');

getDoc(docRef)
  .then((document) => {
    console.log(document.data(), document.id);
  });

// subscribe to an unique doc when change
onSnapshot(docRef, (document) => {
  console.log(document.data(), document.id);
});
*/

// update a document
const docRef = doc(db, 'post', 'aW1XmHENplgBVyGrPFLE');

updateDoc(docRef, {
  text: 'updated pepito',
  pass: 'Florez',
  createdAt: serverTimestamp(),
})
  .then(() => {
    alert('Updated');
  });

/*
const docRef = doc(db, 'post', 'aW1XmHENplgBVyGrPFLE');

// subscribe to an unique doc when change
onSnapshot(docRef, (document) => {
  console.log(document.data(), document.id);
});
*/
