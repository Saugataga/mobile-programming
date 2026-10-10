// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";
import { push, ref, set } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuqaNNIh4BnFZGRE_U3rTo3YZAey7LVyU",
  authDomain: "paila-978fd.firebaseapp.com",
  projectId: "paila-978fd",
  storageBucket: "paila-978fd.firebasestorage.app",
  messagingSenderId: "782004152001",
  appId: "1:782004152001:web:a7ae61e07bbb0d692e1640",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function writeUserData(name, email, message) {
    const userRef = push(ref(db, "contacts"));

    set(userRef, {
        name: name,
        email: email,
        message: message
    }).then(() => {
        const paragraph = document.createElement("p");
        paragraph.textContent = `Name: ${name} | Email: ${email} | Message: ${message}`;
        document.getElementById("details").appendChild(paragraph);
    }).catch((error) => {
        console.error("Data could not be saved:", error);
    });
}

window.writeUserData = writeUserData;