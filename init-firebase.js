// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoXpJPN-k43_nlVWN7HPp4SKdh2-BwyRQ",
  authDomain: "gamefinder-er.firebaseapp.com",
  projectId: "gamefinder-er",
  storageBucket: "gamefinder-er.appspot.com",
  messagingSenderId: "726820079217",
  appId: "1:726820079217:web:bdca2b8a3fc0b7b1b87dd0",
  measurementId: "G-D2W8YT65KV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);