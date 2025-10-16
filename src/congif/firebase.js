import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7C6kREQkYNezUuHfs2dXya_YB0SCMQNs",
  authDomain: "ai-login-2c5ed.firebaseapp.com",
  projectId: "ai-login-2c5ed",
  storageBucket: "ai-login-2c5ed.appspot.com",
  messagingSenderId: "400397129762",
  appId: "1:400397129762:web:4f53c276af42d3a41fd27b",
  measurementId: "G-N34VQCZ49B",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
