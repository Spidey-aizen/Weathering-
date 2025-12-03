// Firebase Authentication (Simple Email/Password)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword }
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// TODO: Replace with your Firebase config

const firebaseConfig = {
  apiKey: "AIzaSyBTY2VkcThOK896oOiX9085uWjYpY8vIH8",
  authDomain: "sky-now-41234.firebaseapp.com",
  projectId: "sky-now-41234",
  storageBucket: "sky-now-41234.firebasestorage.app",
  messagingSenderId: "77857832780",
  appId: "1:77857832780:web:e1342824b36bc4555499e9",
  measurementId: "G-S6G7P245JH"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("loginBtn").onclick = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("msg").textContent = "Login successful!";
      window.location.href = "index.html"; // redirect to your weather app
    })
    .catch((err) => {
      document.getElementById("msg").textContent = err.message;
    });
};
