// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBNB-12oBGe3Fhbwa8B4FtDXG9hnUwqKxM",
  authDomain: "typescripttest-55d8b.firebaseapp.com",
  databaseURL: "https://typescripttest-55d8b-default-rtdb.firebaseio.com",
  projectId: "typescripttest-55d8b",
  storageBucket: "typescripttest-55d8b.appspot.com",
  messagingSenderId: "281508207239",
  appId: "1:281508207239:web:2ebf3ad63ed0fef784f622",
  measurementId: "G-G0B3DYZX5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const firestore=getFirestore(app);
const auth=getAuth(app);
const storage=getStorage(app);


export {firestore,app,storage,auth}


