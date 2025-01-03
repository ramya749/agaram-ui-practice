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
const initialDBData = ref(db,'user/');
function createResume() {
    if(resume.name==" "){
        alert("fillup")
    }
    else{
    push(initialDBData,
        {
            name: resume?.name,
            objective: resume?.objective,
            place: resume?.place,
            date: resume?.date,
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
}

window.createResume = createResume;
// ---<>---


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
            <td>${each[1].name}</td>
            <td>${each[1].objective}</td>
            <td>${JSON.parse(each[1].personal_details).email}</td>
            <td>${JSON.parse(each[1].personal_details).fathername}</td>
            <td>${JSON.parse(each[1].personal_details).mothername}</td>
            <td>${JSON.parse(each[1].personal_details).dob}</td>
            <td>${JSON.parse(each[1].personal_details).nationality}</td>
            <td>${JSON.parse(each[1].personal_details).gender}</td>
            <td>${JSON.parse(each[1].personal_details).phone}</td>
            <td>${each[1].place}</td>
            <td>${each[1].date}</td>

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
}
window.display = display;

function display1(list,id){
    let ul=" ";
    for(let each of list){
        
        ul=ul+
        `<li>${each}</li>
        `
    };
    document.getElementById(id).innerHTML=ul;

}

function display2(){
    let trs=" ";
    for( let each of resume.education){
        trs=trs+
        `<tr>
                        <th>${each.course_institute}</th>
                        <th>${each.course_name}</th>
                        <th>${each.course_year}</th>
                        <th>${each.course_percentage}</th>
        
                    </tr>
        `
    };
    document.getElementById("tlbody").innerHTML=trs;
}
function display3(){
    let trs=" ";
    for( let each of resume.certification){
        trs=trs+
        `<tr>
                        <th>${each.course_name1}</th>
                        <th>${each.course_institute1}</th>
                        <th>${each.cert_year}</th>
                        <th>${each.place}</th>
        
                    </tr>
        `
    };
    document.getElementById("tllbody").innerHTML=trs;
}

function display4(){
    let trs=" ";
    for( let each of resume.project){
        trs=trs+
        `<tr>
                        <th>${each.project_title}</th>
                        <th>${each.project_name}</th>
                        <th>${each.project_years}</th>
                        <th>${each.project_discription}</th>
        
                    </tr>
        `
    };
    document.getElementById("tlllbody").innerHTML=trs;
}

function display5(){
    let trs=" ";
    for( let each of resume.work_experience){
        trs=trs+
        `<tr>
                        <th>${each.company_name}</th>
                        <th>${each.experience}</th>
                        <th>${each.project_year}</th>
                    </tr>
                    `
                };
    document.getElementById("tbbody").innerHTML=trs;
}


    // function display2(){
    //     let ul=" ";
    //     for(let each of resume.hobbies){
    //         ul=ul+
    //         `<li>${each}</li>
    //         `
    //     };
    //     document.getElementById("list1").innerHTML=ul;

    // }
    // function display3(){
    //     let ul=" ";
    //     for(let each of resume.language){
        //         ul=ul+
    //         `<li>${each}</li>
    //         `
    //     };
    //     document.getElementById("list2").innerHTML=ul;


    // }


function deleteResume(id) {
    let data = ref(db, `${tblName}${id}`);
        <td>${JSON.parse(each[1].personal_details).address}</td>
    remove(data);
}
window.deleteResume = deleteResume;

function editResume(id,data){
    const{email,fathername,mothername,dob,nationality,phone,address,gender}=JSON.parse(data.personal_details)
    document.getElementById('update_name').value=data.name;
    document.getElementById('update_objective').value=data.objective;
    document.getElementById('update_email').value=email;
    document.getElementById('update_fathername').value=fathername;
    document.getElementById('update_mothername').value=mothername;
    document.getElementById('update_dob').value=dob;
    document.getElementById('update_nationality').value=nationality;
    document.getElementById('update_phone').value=phone;
    document.getElementById('update_address').value=address;
    document.getElementById('update_place').value=data.place;
    document.getElementById('update_date').value=data.date;
    document.getElementById('update_id').value=id;

   
    if(gender=="male"){
        document.getElementById('update_gender_male').checked=true;
}
else{
    document.getElementById('update_gender_female').checked=true;

}
resume.name=data.name;
resume.objective=data.objective;
resume.personal_details.email=email;
resume.personal_details.fathername=fathername;
resume.personal_details.mothername=mothername;
resume.personal_details.dob=dob;
resume.personal_details.nationality=nationality;
resume.personal_details.phone=phone;
resume.personal_details.address=address;
resume.personal_details.gender=gender;
resume.place=data.place;
resume.date=data.date;

let skills=JSON.parse(data.skills);
resume.skills=skills;
display1(resume.skills,"list")

let hobbies=JSON.parse(data.hobbies);
resume.hobbies=hobbies;
display1(resume.hobbies,"list1")

let language=JSON.parse(data.language);
resume.language=language;
display1(resume.language,"list2")


let education = JSON.parse(data.education)
resume.education=education;
display2()

let certification = JSON.parse(data.certification)
resume.certification=certification;
display3()

let project = JSON.parse(data.project)
resume.project=project;
display4()

let work_experience = JSON.parse(data.work_experience)
resume.work_experience=work_experience;
display5()

}



window.editResume=editResume;

function updateResume(){
    // let name=document.getElementById('update_name').value;
    // let objective=document.getElementById('update_objective').value;
    // let email=document.getElementById('update_email').value;
    // let fathername=document.getElementById('update_fathername').value;
    // let mothername=document.getElementById('update_mothername').value;
    // let dob=document.getElementById('update_dob').value;
    // let nationality=document.getElementById('update_nationality').value;
    // let phone=document.getElementById('update_phone').value;
    // let address=document.getElementById('update_address').value;
    // let place=document.getElementById('update_place').value;
    // let date=document.getElementById('update_date').value;
    let name=resume.name;
    let objective=resume.objective;
    let email=resume.personal_details.email;
    let fathername=resume.personal_details.fathername;
    let mothername=resume.personal_details.mothername;
    let dob=resume.personal_details.dob;
    let nationality=resume.personal_details.nationality;
    let phone=resume.personal_details.phone;
    let address=resume.personal_details.address;
    let place=resume.place;
    let date=resume.date;
    let skills=resume.skills;
    let hobbies=resume.hobbies;
    let language=resume.language;
    let education=resume.education;
    let certification=resume.certification;
    let project=resume.project;
    let work_experience=resume.work_experience;
    let gender=resume.personal_details.gender
    let id=document.getElementById('update_id').value;
    let p_details={
        email:email,
        fathername:fathername,
        mothername:mothername,
        dob:dob,
        nationality:nationality,
        phone:phone,
        address:address,
        gender:gender

        
    }
    set(ref(db,'user/'+id),{
        name: name,
        objective: objective,
        place: place,
        date: date,
        education: JSON.stringify(education),
        project: JSON.stringify(project) ,
        certification:JSON.stringify(certification),
        hobbies:JSON.stringify(hobbies),
        language:JSON.stringify(language),
        skills:JSON.stringify(skills),
        work_experience:JSON.stringify(work_experience) ,
        personal_details:JSON.stringify(p_details)
    });
    
}
window.updateResume=updateResume;

function addValue(e, key, p_key) {
    if (p_key) {
        // console.log(p_key)
        resume[p_key][key] = e.value;
    }
     else {
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
    if(key=="skills"){
        display1(resume.skills,"list")
    }
    else if(key=="hobbies"){
        display1(resume.hobbies,"list1")
    }
    else if(key=="language"){
        display1(resume.language,"list2")
    }
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
    display2();
    display3();
    display4();
    display5();

}

window.addMultiValue = addMultiValue


function display_output() {
    document.getElementById('output').innerHTML = JSON.stringify(resume);
}
