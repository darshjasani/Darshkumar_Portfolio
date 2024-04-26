// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvlE3uZkiNiY4hEsj2ChKWisH3ptdM6oQ",
  authDomain: "darshkumar-portfolio.firebaseapp.com",
  projectId: "darshkumar-portfolio",
  storageBucket: "darshkumar-portfolio.appspot.com",
  messagingSenderId: "358517884339",
  appId: "1:358517884339:web:2626f5bac0c3d992dff7c6",
  measurementId: "G-ZFWJCY4T3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);