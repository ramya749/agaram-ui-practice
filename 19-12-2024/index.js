// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, onValue, push,remove,set} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
const appSetting = {
  databaseURL: "https://exercise-132ed-default-rtdb.firebaseio.com/"
};
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNYMh83hCfi-Ipei9MVvQNbyKtyd7ajTQ",
  authDomain: "exercise-132ed.firebaseapp.com",
  projectId: "exercise-132ed",
  storageBucket: "exercise-132ed.firebasestorage.app",
  messagingSenderId: "276461625150",
  appId: "1:276461625150:web:5bfbadba6899f80084966f"
};

// Initialize Firebase CREATE FIREBASE
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const starCountRef = ref(db, 'user/');
function createResume() {
  push(starCountRef,
    {
      Name: document.getElementById("name").value,
      Age: document.getElementById("age").value,

    });
  alert("done!");
}
window.createResume = createResume;
// ----<>----

// table
function display(){
onValue(starCountRef, (snapshot) => {
  let trs="";
  const data = snapshot.val();
  let userArray=Object.entries(data);
  let index=1;
  for(let each of userArray){
 
    trs=trs+`
    <tr>
    <td>${index}</td>
    <td>${each[1].Name}</td>
    <td>${each[1].Age}</td>
    <td><button onclick="deleteResume('${each[0]}')">Delete</button>
    <button onclick='editName("${each[0]}",${JSON.stringify(each[1])})'>Edit</button></td>
</tr>`
index=index+1;
  }
  document.getElementById("tlbody").innerHTML= trs;
});

}
window.display = display;
display()
//---<>---

function deleteResume(id){
  alert("delete");
  let data = ref(db, `user/${id}`);
  remove(data);
}
window.deleteResume=deleteResume;


function editName(id,data){
  document.getElementById('update_name').value=data.Name;
  document.getElementById('update_age').value=data.Age;
  document.getElementById('update_id').value=id;


}
window.editName=editName;

function updateResume(){
  let name=document.getElementById('update_name').value;
  let age=document.getElementById('update_age').value;
  let id=document.getElementById('update_id').value;
  set(ref(db,'user/'+id),{
    Name:name,
    Age:age,
  });
}
window.updateResume=updateResume;
display();