let resume = {
    personal_details: {},
    skills: [],
    hobbies: [],
    language:[],
    education: [],
    project: [],
    certification:[],
    work_experience:[]


}
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {getDatabase, ref, onValue, set, get, child } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHzaVggqJOFguy0dQzIQ-eFiHPOqyyREA",
    authDomain: "resume-builder-c1a54.firebaseapp.com",
    projectId: "resume-builder-c1a54",
    storageBucket: "resume-builder-c1a54.firebasestorage.app",
    messagingSenderId: "712885364038",
    appId: "1:712885364038:web:857681fb361a9ec063b147"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//   get ref to database service
const db = getDatabase(app);
const initialDBData = ref(db,'user/');

function display(){
    onValue(initialDBData, (snapshot) => {
        const data = snapshot.val();
        let userArray = Object.entries(data);
        let trs=" ";
        let index=1;
        for(let each of userArray){
            trs = trs + `<tr>
            <td>${index}</td>
            <td>${each[1].Name}</td>
            <td>${JSON.parse(each[1].personal_details).email}</td>
            <td>
            <button>Delete</button>
            <button>Edit</button>
            </td>
        </tr>`       
          
        index=index+1;
            // list.push(each[1]);
        }
        document.getElementById("tbody").innerHTML=trs;
    });
    // console.log(list);


}
window.display=display;
display();