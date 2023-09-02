// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx1LkHqxdvBhi0kCfp4tMKbg_pxraZ7f4",
  authDomain: "react-firebasee-6101c.firebaseapp.com",
  projectId: "react-firebasee-6101c",
  storageBucket: "react-firebasee-6101c.appspot.com",
  messagingSenderId: "877008231777",
  appId: "1:877008231777:web:140fe69d4d565e914b3920",
  measurementId: "G-3MJW6W7GZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;


