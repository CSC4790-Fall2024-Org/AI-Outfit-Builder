// configuration.jsx
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAX9laLyCkuX2Sqr2On7GoWSK8BXgYVQjs",
  authDomain: "smartstylist-179ce.firebaseapp.com",
  databaseURL: "https://smartstylist-179ce-default-rtdb.firebaseio.com",
  projectId: "smartstylist-179ce",
  storageBucket: "smartstylist-179ce.appspot.com",
  messagingSenderId: "694549919924",
  appId: "1:694549919924:web:a0a5ab2fdeb94fbfa63fe1",
  measurementId: "G-VV4NK6WY5P"
};

export { firebaseConfig };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const storage = getStorage(app);

export { app, analytics, database, storage };
