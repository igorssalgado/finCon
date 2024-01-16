// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATffmCGOQJ2rkMIU572t3ZnzXkgPWz2vY",
  authDomain: "playground-40791.firebaseapp.com",
  databaseURL: "https://playground-40791-default-rtdb.firebaseio.com",
  projectId: "playground-40791",
  storageBucket: "playground-40791.appspot.com",
  messagingSenderId: "796342435152",
  appId: "1:796342435152:web:368aa54e2f9b7d0b000055",
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
