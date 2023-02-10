// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAap2Qq-8r5L2xoSPBQvGo42iQyFxd5e80",
  authDomain: "webdevelopmenttask1.firebaseapp.com",
  projectId: "webdevelopmenttask1",
  storageBucket: "webdevelopmenttask1.appspot.com",
  messagingSenderId: "37292527616",
  appId: "1:37292527616:web:10fb4c48e55a6426a348e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app