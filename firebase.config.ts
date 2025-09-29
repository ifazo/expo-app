// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK5tO6A1Tkg4D0ZCcSBB_Cuv_s8ByD2C8",
  authDomain: "ifaz-expo-project.firebaseapp.com",
  projectId: "ifaz-expo-project",
  storageBucket: "ifaz-expo-project.firebasestorage.app",
  messagingSenderId: "700304685549",
  appId: "1:700304685549:web:c417c7d38f63f05978cfe4",
  measurementId: "G-5KHSCZ719D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);

export const auth = getAuth(app);