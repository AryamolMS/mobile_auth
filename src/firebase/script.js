import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyDqCXXunGGxd0V_NcUWbNPBqOmNw4P3OhA",
  authDomain: "mobile-auth-aba49.firebaseapp.com",
  projectId: "mobile-auth-aba49",
  storageBucket: "mobile-auth-aba49.appspot.com",
  messagingSenderId: "994907931260",
  appId: "1:994907931260:web:70c94e64fee3ecf42f3ff9",
  measurementId: "G-XNXF0MDYDQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);