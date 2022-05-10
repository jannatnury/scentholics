// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoRPylF8kkjvjrNYU_v9P8whud30IwCTA",
  authDomain: "warehouse-management-18f33.firebaseapp.com",
  projectId: "warehouse-management-18f33",
  storageBucket: "warehouse-management-18f33.appspot.com",
  messagingSenderId: "967119652040",
  appId: "1:967119652040:web:395fa94aa1134b289c91fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;