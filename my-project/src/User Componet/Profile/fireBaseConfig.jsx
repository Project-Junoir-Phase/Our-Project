import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCqiBJvcvC--gSUqL7lCYpezHLdBRQb6Go",
  authDomain: "carpool-cb724.firebaseapp.com",
  projectId: "carpool-cb724",
  storageBucket: "carpool-cb724.appspot.com",
  messagingSenderId: "658689865584",
  appId: "1:658689865584:web:da5f441ec1311a3663c1b5"
};

const app = initializeApp(firebaseConfig);
export const imageDB = getStorage(app)