// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyT2xnPl5c-ed1KHIxOHL8kPVUy3Oug8E",
  authDomain: "greennext-fribase-project.firebaseapp.com",
  projectId: "greennext-fribase-project",
  storageBucket: "greennext-fribase-project.firebasestorage.app",
  messagingSenderId: "791941771147",
  appId: "1:791941771147:web:6e598df8744338ed5ec98e"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
export default app;



