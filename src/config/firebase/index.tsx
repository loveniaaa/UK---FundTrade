// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkEYixkYgG7A84y62Eg99Ih0YULFYT3Bg",
  authDomain: "uk-fundtrade.firebaseapp.com",
  projectId: "uk-fundtrade",
  storageBucket: "uk-fundtrade.appspot.com",
  messagingSenderId: "764739660302",
  appId: "1:764739660302:web:961b2515f0cc352311ea5f",
  measurementId: "G-CCLXHDYJ5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;