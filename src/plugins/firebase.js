import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBJ_HVXr0ogKjC-RaiGXf8r9Tglp48ssNk',
  authDomain: 'chatroom-store.firebaseapp.com',
  databaseURL: 'https://chatroom-store.firebaseio.com',
  projectId: 'chatroom-store',
  storageBucket: 'chatroom-store.appspot.com',
  appId: '1:549132760773:web:9bb456bb43d3685b37e2ac',
  measurementId: 'G-07K72QCY4L'
}

const app = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth(app)
const firestore = firebase.firestore(app)
const storage = firebase.storage(app);
const Timestamp = firebase.firestore.Timestamp

export {
  firebase,
  app,
  auth,
  firestore,
  storage,
  Timestamp
}