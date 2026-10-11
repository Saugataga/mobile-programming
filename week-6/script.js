// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import {
  get,
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuqaNNIh4BnFZGRE_U3rTo3YZAey7LVyU",
  authDomain: "paila-978fd.firebaseapp.com",
  projectId: "paila-978fd",
  storageBucket: "paila-978fd.firebasestorage.app",
  messagingSenderId: "782004152001",
  appId: "1:782004152001:web:a7ae61e07bbb0d692e1640",
 // measurementId: "G-2KZNYLEQCL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
  const db = getDatabase(app);

console.log(db);

function writeUserData(userId,fname,lname,email,phone,address,gender,age,weight,height) {
  set(ref(db, 'users/' + userId), {
    first_name: fname,
    last_name: lname,
    email: email,
    phone: phone,
    address: address,
    gender: gender,
    age: age,
    weight: weight,
    height: height
  });
}

writeUserData('1','John','Doe','john@gmail.com','1234567890','123 Main St','Male',30,70,180);
writeUserData('2','Vane','Parker','vane@gmail.com','0987654321','456 Elm St','Female',28,60,165);
writeUserData('3','Robert','Johnson','robert@gmail.com','5555555555','789 Oak St','Male',35,80,185);
writeUserData('4','Alice','Williams','alice@gmail.com','1111111111','012 Pine St','Female',25,55,170);
writeUserData('5','Charlie','Brown','charlie@gmail.com','2222222222','345 Maple St','Male',32,75,175);

function readUserData(userId) {
     const dbField = ref(db,'users')

    get(dbField).then((snapshot)=>{
        snapshot.forEach((childsnapshot)=>{
          if(childsnapshot.key === userId){
            const data = childsnapshot.val();
            console.log(data);
            document.getElementById("userData").innerHTML = `
            <strong>First Name:</strong> ${data.first_name}<br>
            <strong>Last Name:</strong> ${data.last_name}<br>
            <strong>Email:</strong> ${data.email}<br>
            <strong>Phone:</strong> ${data.phone}<br>
            <strong>Address:</strong> ${data.address}<br>
            <strong>Gender:</strong> ${data.gender}<br>
            <strong>Age:</strong> ${data.age}<br>
            <strong>Weight:</strong> ${data.weight}<br>
            <strong>Height:</strong> ${data.height}
          `;
          }
        })
    })  
}

window.getData = function getData() {
  const userId = document.getElementById("userId").value;
  readUserData(userId);
}
