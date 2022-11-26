// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc_DynTmd-Khd5JKNZDlyEpZW9x2Ql7KY",
  authDomain: "tv-bazar.firebaseapp.com",
  projectId: "tv-bazar",
  storageBucket: "tv-bazar.appspot.com",
  messagingSenderId: "429177493951",
  appId: "1:429177493951:web:67716eb6ac31129f11e90a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;