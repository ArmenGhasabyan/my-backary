import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDhzx3KM0GC2pYdrPFf8fCMYogGRP0qvp0",
    authDomain: "freshapp-e05b2.firebaseapp.com",
    databaseURL: "https://freshapp-e05b2-default-rtdb.firebaseio.com",
    projectId: "freshapp-e05b2",
    storageBucket: "freshapp-e05b2.appspot.com",
    messagingSenderId: "373810419444",
    appId: "1:373810419444:web:893af1671c0784e027b0a1"
  };
  
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage = getFirestore(app)

  export {app, firestore, storage }