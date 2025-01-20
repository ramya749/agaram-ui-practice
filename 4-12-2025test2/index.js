  let system={
    name:"",
    rollnumber:"",
    subject:[],
    examscore:{},
    project:[],

  }
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getDatabase,ref,push,onValue,remove,set} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBspRlQW_SctRNW0S1LvEoy0UuNlQZub34",
    authDomain: "test2-fa233.firebaseapp.com",
    projectId: "test2-fa233",
    storageBucket: "test2-fa233.firebasestorage.app",
    messagingSenderId: "747808942112",
    appId: "1:747808942112:web:902838af42fa430efeb445"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db=getDatabase(app);
  const tblname='user/';
  const initialDB=ref(db,tblname);

  function createOption(){
    push(initialDB,{
        name:system?.name,
        rollnumber:system?.rollnumber,
        subject:JSON.stringify(system?.subject),
        examscore:JSON.stringify(system?.examscore),
        project:JSON.stringify(system?.project),

    });
    alert("done");
    window.location.href="list.html";

  }
  window.createOption=createOption;

  function display(){
    onValue(initialDB,(snapshot)=>{
      let trs=" ";
    
      if(snapshot.exists()){
        const data=snapshot.val();
        let userArray = Object.entries(data);
        let index=1;
        for(let each of userArray){
          trs=trs+` <tr>
                <td>${index}</td>
                <td>${each[1].name}</td>
                <td>${each[1].rollnumber}</td>
                <td>${JSON.parse(each[1].examscore).maths}</td>
                <td>${JSON.parse(each[1].examscore).science}</td>

                <td><button onclick="deleteOption('${each[0]}')">Delete</button>
                <button onclick='editOption("${each[0]}",${JSON.stringify(each[1])})'>Edit</button></td>
            </tr>
          `
          index=index+1;
        }
      }
      document.getElementById("tlbody").innerHTML=trs
    });
  };
  display();
  display_output();
  window.dispaly=display;

  function display1(){
    let ul=" ";
    for(let each of system.subject){
      ul=ul+`
      <li>${each}</li>
      `
    }
    document.getElementById("table").innerHTML=ul;
  }
  window.display1=display1;

  function display2(){
    let trs=" ";
    for(let each of system.project){
      trs=trs+`<tr>
      <td>${each.project_name}</td>
      <td>${each.project_year}</td>
      </tr>
      `
    }
    document.getElementById("table1").innerHTML=trs;
  }
  window.display2=display2;



  function deleteOption(id){
    alert("delete conform")
    let data=ref(db,`${tblname}${id}`);
    remove(data);
  }
  window.deleteOption=deleteOption;

  function editOption(id,data){
    const{maths,science}=JSON.parse(data.examscore)
    document.getElementById('updateid').value=id;
    document.getElementById('updatename').value=data.name;
    document.getElementById('updaterollnumber').value=data.rollnumber;
    document.getElementById('updatemaths').value=maths;
    document.getElementById('updatescience').value=science;



    system.name=data.name;
    system.rollnumber=data.rollnumber;
    system.examscore.maths=maths;
    system.examscore.science=science;

    let subject=JSON.parse(data.subject);
    system.subject=subject;
    display1();


    let project=JSON.parse(data.project);
    system.project=project;
    display2()

   
  }


  window.editOption=editOption;

  function updateOption(){
    let id=document.getElementById('updateid').value;
    let name=system.name;
    let rollnumber=system.rollnumber;
    let maths = system.examscore.maths;
    let science=system.examscore.science;
    let subject=system.subject;
    let project=system.project

    let p_details={
      maths:maths,
      science:science,
    }

    set(ref(db,'user/'+id),{
      name:name,
      rollnumber:rollnumber,
      subject:JSON.stringify(subject),
      examscore:JSON.stringify(p_details),
      project:JSON.stringify(project)

    });

  }
window.updateOption=updateOption;

function addValue(e,key,p_key){
    if(p_key){
        system[p_key][key]=e.value
    }
    else{
        system[key]=e.value
    }
    display_output();

}
window.addValue=addValue;





function addValues(key){
    let value=document.getElementById(key).value;
    system[key].push(value);
    document.getElementById(key).value="";
    display_output();
    display1();
}
window.addValues=addValues;




function addMultiValue(p_key,key1,key2){
    let newObj={};
     newObj[key1]=document.getElementById(key1).value;
     newObj[key2]=document.getElementById(key2).value;
     system[p_key].push(newObj);


     document.getElementById(key1).value="";
     document.getElementById(key2).value="";
     display_output();
     display2();
};
window.addMultiValue=addMultiValue;



  function display_output(){
    document.getElementById("output").innerHTML=JSON.stringify(system);
  }