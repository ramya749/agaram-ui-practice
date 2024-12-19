let resume = {
    personal_details: {},
    skills: [],
    hobbies: [],
    language: [],
    education: [],
    project: [],
    certification: [],
    work_experience: [],
    name: [],
    objective: [],
    place: [],
    date: []


}
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, ref, onValue, push, remove, set, get, child } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
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
const tblName = 'user/';
const initialDBData = ref(db, tblName);
function createResume() {
    push(initialDBData,
        {
            Name: resume?.name,
            Objective: resume?.objective,
            Place: resume?.place,
            Date: resume?.date,
            education: JSON.stringify(resume?.education),
            project: JSON.stringify(resume?.project),
            certification: JSON.stringify(resume?.certification),
            hobbies: JSON.stringify(resume?.hobbies),
            language: JSON.stringify(resume?.language),
            skills: JSON.stringify(resume?.skills),
            work_experience: JSON.stringify(resume?.work_experience),
            personal_details: JSON.stringify(resume?.personal_details)
        });
    alert("done!");
    window.location.href = "list.html";
}
window.createResume = createResume;
function display() {
    let list = [];
    onValue(initialDBData, (snapshot) => {
        let trs = " ";
        if (snapshot.exists()){ 
            const data = snapshot.val();
        let userArray = Object.entries(data);
        let index = 1;
        for (let each of userArray) {
            console.log(each)
            trs = trs + `<tr>
            <td>${index}</td>
            <td>${each[1].Name}</td>
            <td>
            <button onclick="deleteResume('${each[0]}')">Delete</button>
            <button onclick='editResume("${each[0]}",${JSON.stringify(each[1])})'>Edit</button>
            </td>
        </tr>`

            index = index + 1;
            // list.push(each[1]);
        }
    }
        document.getElementById("tbody").innerHTML = trs;
});
    // console.log(list);
}
window.display = display;
display();

function deleteResume(id) {
    let data = ref(db, `${tblName}${id}`);
    remove(data);
}
window.deleteResume = deleteResume;

function editResume(id,data){
    document.getElementById('update_name').value=data.Name;
    document.getElementById('update_id').value=id;

}

window.editResume=editResume;

function updateResume(){
    let name=document.getElementById('update_name').value;
    let id=document.getElementById('update_id').value;
    set(ref(db,'user/'+id),{
        Name: name,
        Objective: "",
        Place: "",
        Date: "",
        education: "",
        project: "",
        certification: "",
        hobbies: "",
        language: "",
        skills: " ",
        work_experience: "",
        personal_details: ""
    });
    
}
window.updateResume=updateResume;

function addValue(e, key, p_key) {
    if (p_key) {
        console.log(p_key)
        resume[p_key][key] = e.value;
    } else {
        resume[key] = e.value;
    }
    display_output();
}
window.addValue = addValue;

function addArrayValue(key) {
    let value = document.getElementById(key).value;
    resume[key].push(value);
    document.getElementById(key).value = "";
    display_output();
}
window.addArrayValue = addArrayValue;
function addMultiValue(p_key, key1, key2, key3, key4) {
    let newObj = {};
    if (key4) {
        newObj[key1] = document.getElementById(key1).value;
        newObj[key2] = document.getElementById(key2).value;
        newObj[key3] = document.getElementById(key3).value;
        newObj[key4] = document.getElementById(key4).value;
        resume[p_key].push(newObj)
        document.getElementById(key1).value = "";
        document.getElementById(key2).value = "";
        document.getElementById(key3).value = "";
        document.getElementById(key4).value = "";
    }
    else if (key3) {
        newObj[key1] = document.getElementById(key1).value;
        newObj[key2] = document.getElementById(key2).value;
        newObj[key3] = document.getElementById(key3).value;
        resume[p_key].push(newObj)
        document.getElementById(key1).value = "";
        document.getElementById(key2).value = "";
        document.getElementById(key3).value = "";

    }
    display_output()
}

window.addMultiValue = addMultiValue


function display_output() {
    document.getElementById('output').innerHTML = JSON.stringify(resume)
}