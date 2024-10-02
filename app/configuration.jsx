// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);