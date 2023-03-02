// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdn8v8oIJQI7qbT4VpiM7nYYWQOuCBPdM",
  authDomain: "logic-work-5c0ef.firebaseapp.com",
  projectId: "logic-work-5c0ef",
  storageBucket: "logic-work-5c0ef.appspot.com",
  messagingSenderId: "942064998543",
  appId: "1:942064998543:web:c1a39ae42bb7c8583038fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestore = () =>{
    return app
}