import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB5Kk_5fqUspgYcLIsk1NKAz9p9BIvOpdA",
    authDomain: "smart-bin-615ec.firebaseapp.com",
    databaseURL: "https://smart-bin-615ec.firebaseio.com",
    projectId: "smart-bin-615ec",
    storageBucket: "smart-bin-615ec.appspot.com",
    messagingSenderId: "681459573859",
    appId: "1:681459573859:web:0e489e7c25227c86690456",
    measurementId: "G-VD0T80PJJV"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase.apps[0] || firebase.initializeApp(firebaseConfig);
