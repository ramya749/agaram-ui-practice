
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, push, onValue,remove,set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCffw-ureGatWThww44G86fibLi4XBOI8s",
  authDomain: "playground-bd270.firebaseapp.com",
  projectId: "playground-bd270",
  storageBucket: "playground-bd270.firebasestorage.app",
  messagingSenderId: "97944969411",
  appId: "1:97944969411:web:d636bd010b0955bc6a8276"
};
const appSetting = {
  databaseURL: "https://playground-bd270-default-rtdb.firebaseio.com/"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const tblname = 'list/';
const initialDBData = ref(db, tblname);
function createData() {
  if(input.value == ""){
    alert("please fill up")
  }
  else{
  push(initialDBData,
    {
      Name: document.getElementById("input").value
    });
  alert("done");
  clear();
  }
}
window.createData = createData;

// clear 
function clear(){
   document.getElementById("input").value=""

}
// ----<>----

function display() {
  onValue(initialDBData, (snapshot) => {
    let ul = "";
    const data = snapshot.val();
    let userArray = Object.entries(data);
    for (let each of userArray) {
      ul = ul+
      `
                <li>
                ${each[1].Name}
                <button class="btn-delete" onclick="deleteList('${each[0]}')">
                 <ion-icon name="trash-outline"></ion-icon></button>
                <button class="btn-edit" onclick='editList("${each[0]}",${JSON.stringify(each[1])})'>
                                <ion-icon name="create-outline" ></ion-icon></button>

                </li>
            `  
    }
    document.getElementById("list").innerHTML = ul;
  });
  
}
window.display = display;
display();


function deleteList(id){
  alert("ok");
  // console.log(id);
  let data=ref(db,`list/${id}`);
  remove(data);
}
window.deleteList=deleteList

function editList(id,data){
  document.getElementById('input').value=data.Name;
  document.getElementById('update_id').value=id;
  document.getElementById('addcart').style.display="none"; 
  document.getElementById('update').style.display="block";

}
window.editList=editList


function updateList(){
  let name=document.getElementById('input').value;
  let id=document.getElementById('update_id').value;
 set(ref(db,'list/'+id),{
    Name:name,
  });
  clear()
  document.getElementById('addcart').style.display="block"; 
  document.getElementById('update').style.display="none";
}
window.updateList=updateList
display()






