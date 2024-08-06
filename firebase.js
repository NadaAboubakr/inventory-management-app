// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANz1LpJU_rtfTcfNj0amgTDy3tkbjXHPM",
  authDomain: "inventory-management-app-69b57.firebaseapp.com",
  projectId: "inventory-management-app-69b57",
  storageBucket: "inventory-management-app-69b57.appspot.com",
  messagingSenderId: "365613845265",
  appId: "1:365613845265:web:149de6a5e13464c91e1ab0",
  measurementId: "G-M4H6FGLQR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      const analytics = getAnalytics(app);
    } else {
      console.log('Firebase Analytics is not supported in this environment.');
    }
  });
}

const analytics = getAnalytics(app);
const firestore = getFirestore(app);



export {firestore}