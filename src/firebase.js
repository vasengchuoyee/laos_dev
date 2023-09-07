// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa9AsbQPWmJ2oQ-nT81_DqNHUlmFjtDpU",
  authDomain: "vuejsdatabase-e626f.firebaseapp.com",
  projectId: "vuejsdatabase-e626f",
  storageBucket: "vuejsdatabase-e626f.appspot.com",
  messagingSenderId: "192519615072",
  appId: "1:192519615072:web:ef3a56198273a628b54905",
  measurementId: "G-5J2JCPFRRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default {app, analytics};