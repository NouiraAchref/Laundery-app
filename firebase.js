import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDRJtGbPsNIajU2M1X3mZxV1xAwKi6XeA0",
  authDomain: "laundry-application-cda57.firebaseapp.com",
  projectId: "laundry-application-cda57",
  storageBucket: "laundry-application-cda57.appspot.com",
  messagingSenderId: "884695655957",
  appId: "1:884695655957:web:d5fa2adce7a5cebb79d01c"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};