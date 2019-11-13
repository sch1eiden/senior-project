import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD672zLqC4UXrvds9y1S8aUjW2Vykrrkig",
    authDomain: "bin-smart.firebaseapp.com",
    databaseURL: "https://bin-smart.firebaseio.com",
    projectId: "bin-smart",
    storageBucket: "bin-smart.appspot.com",
    messagingSenderId: "803509135266",
    appId: "1:803509135266:web:2e73ca5a5e525fc4a0f4fb",
    measurementId: "G-KFD2QNH69W"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true })
  // firebase.analytics();
  
  export default firebase.apps[0] || firebase.initializeApp(firebaseConfig);