// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFQgOyBNdcXUwRoldCx7JUbKlfveDk_oo",
    authDomain: "ema-john-simple-93215.firebaseapp.com",
    projectId: "ema-john-simple-93215",
    storageBucket: "ema-john-simple-93215.appspot.com",
    messagingSenderId: "394428850481",
    appId: "1:394428850481:web:b500e43a59171441455010"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;