let resume = {
    name:"",
    objective:"",
    personal_details:{},
    skills:[],
    hobbies:[],
    education:[],
    project:[],
}
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getDatabase,ref, set,push,onValue,remove} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAe-fctd7GyWf-4_L1qs8tWBfTBP-y9Q-w",
    authDomain: "work-e2028.firebaseapp.com",
    projectId: "work-e2028",
    storageBucket: "work-e2028.firebasestorage.app",
    messagingSenderId: "69062636770",
    appId: "1:69062636770:web:d0f726b9d396e7819c5abb"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db=getDatabase(app);
  const tblName='user/';
  const initialDB=ref(db,'user/')

function createResume(){
    push(initialDB,{
        name:resume?.name,
        objective:resume?.objective,
        personal_details:JSON.stringify(resume?.personal_details),
        skills:JSON.stringify(resume?.skills),
        hobbies:JSON.stringify(resume?.hobbies),
        education:JSON.stringify(resume?.education),
        project:JSON.stringify(resume?.project),

    });
    alert("done");
    window.location.href="form.html"
}
window.createResume=createResume;

function display(){
    onValue(initialDB,(snapshot)=>{
        let trs="";
        // if (snapshot.exist()){
            const data=snapshot.val();
            let userArray=Object.entries(data);
            let index=1;
            for(let each of userArray){
                trs=trs+`<tr>
                <td>${index}</td>
                <td>${each[1].name}</td>
                <td>${each[1].objective}</td>
                <td>${JSON.parse(each[1].personal_details).email}</td>
                <td>${JSON.parse(each[1].personal_details).fathername}</td>
                <td>${JSON.parse(each[1].personal_details).mothername}</td>
                <td>${each[1].skills}</td>
                <td><button onclick="deleteOption('${each[0]}')">Delete</button>
                <td><button onclick='editOption("${each[0]}",${JSON.stringify(each[1])})'>Edit</button>

                </tr>`
                index=index+1;
            };
        document.getElementById("tlbody").innerHTML=trs;

        });
    
}
window.display=display;


function addValue(e,key,p_key){
    if(p_key){
        resume[p_key][key]=e.value;
    }
    else{
        resume[key]=e.value;
    }
    display_output();

}
window.addValue=addValue;

function deleteOption(id){
    alert("delete conform");
    let data = ref(db, `${tblName}${id}`);
    remove(data);
}
window.deleteOption=deleteOption;

function editOption(id,data){
    const{email,fathername,mothername}=JSON.stringify(data.personal_details);
    document.getElementById('name').value=data.name;
    document.getElementById('updateid').value=id;
    document.getElementById('objective').value=data.objective;
    document.getElementById('email').value=email;
    document.getElementById('fathername').value=fathername;
    document.getElementById('mothername').value=mothername;

    resume.name=data.name;
    resume.objective=data.objective;
    resume.personal_details.email=email;
    resume.personal_details.fathername=fathername;
    resume.personal_details.mothername=mothername;
}
window.editOption=editOption

function updateOption(){
    alert("update");
    let id=document.getElementById('updateid').value;
    let name=resume.name;
    let objective=resume.objective;
    let email=resume.personal_details.email;

    let p_details={
        email:email,
    }
    set(ref(db,'user/'+id),{
        name:name,
        objective:objective,
        personal_details:JSON.stringify(p_details),
    });

}
window.updateOption=updateOption

function addValues(key){
    let value=document.getElementById(key).value;
    resume[key].push(value);
    document.getElementById(key).value="";  

    display_output();

}
window.addValues=addValues;

function addMultiValue(p_key,key1,key2,key3,key4){
    let newObj={};
    if(key4){
        newObj[key1]=document.getElementById(key1).value;
        newObj[key2]=document.getElementById(key2).value;
        newObj[key3]=document.getElementById(key3).value;
        newObj[key4]=document.getElementById(key4).value;
        resume[p_key].push(newObj);

        document.getElementById(key1).value="";
        document.getElementById(key2).value;"";
        document.getElementById(key3).value;"";
        document.getElementById(key4).value;"";
    }
else if(key3){
    newObj[key1]=document.getElementById(key1).value;
    newObj[key2]=document.getElementById(key2).value;
    newObj[key3]=document.getElementById(key3).value;
    resume[p_key].push(newObj);

    document.getElementById(key1).value="";
    document.getElementById(key2).value;"";
    document.getElementById(key3).value;"";
}
display_output();
}
window.addMultiValue=addMultiValue;

  function display_output(){
    document.getElementById("output").innerHTML = JSON.stringify(resume);
 }