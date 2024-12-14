import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"
import { getDatabase, ref, push, onValue, remove, set } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js"
const appSetting = {
  databaseURL: "https://modeljs-e1269-default-rtdb.firebaseio.com/"
};

const app = initializeApp(appSetting);
const database = getDatabase(app);
const userListInDB = ref(database, "users");


const idEL = document.querySelector("#id");
const nameEL = document.querySelector("#name");
const ageEL = document.querySelector("#age");
const cityEL = document.querySelector("#city");
const frm = document.querySelector("#frm");
const tblBodyEL = document.querySelector("#tblBody");


frm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!nameEL.value.trim() || !ageEL.value.trim()|| !cityEL.value.trim()) {
    alert("Please fill all details");
    return;
  }
  // console.log(nameEL.value);
  
  if (idEL.value) {
    //Update Record 
    set(ref(database, "users/" + idEL.value), {
      name: nameEL.value.trim(),
      age: ageEL.value.trim(),
      city: cityEL.value.trim(),

    });
    clearElements(); 
    return;
  }

 
// Insert 
const newUser = {
  name: nameEL.value.trim(),
  age: ageEL.value.trim(),
  city: cityEL.value.trim(),
};
push(userListInDB, newUser);
clearElements(); 
 
    });

function clearElements() {
  nameEL.value = " ";
  ageEL.value = " ";
  cityEL.value = " ";
  idEL.value = " ";

}
onValue(userListInDB, function (snapshot) {
    if (snapshot.exists()) {
      let userArray = Object.entries(snapshot.val());
    //   console.log(userArray);
      tblBodyEL.innerHTML = "";
    for (let i = 0; i < userArray.length; i++) {
        let currentUser = userArray[i];
        // console.log(currentUser);
        let currentUserID = currentUser[0];
        let currentUserValue = currentUser[1];
        tblBodyEL.innerHTML +=`
          <tr>
            <td>${i + 1}</td>
            <td>${currentUserValue.name}</td>
            <td>${currentUserValue.age}</td>
            <td>${currentUserValue.city}</td>
            <td>
              <button class="btn-edit"data-id="${currentUserID}" >
                <ion-icon name="create-outline" ></ion-icon>
              </button>
            </td>
            <td>
              <button class="btn-delete"data-id="${currentUserID}">
                <ion-icon name="trash-outline"></ion-icon>
              </button>
            </td>
          </tr>
        `
      }
  
    } else {
      tblBodyEL.innerHTML = "<tr><td colspan='6'>No Record Found</td></tr>"
    }
  });

  document.addEventListener("click", function (e) {
    if(e.target.classList.contains("btn-edit")){
        const id = e.target.dataset.id;
        // console.log(e.target.closest("tr").ch);
        const tdElements = e.target.closest("tr").children;
        idEL.value=id;
        nameEL.value = tdElements[1].textContent;
        ageEL.value = tdElements[2].textContent;
        cityEL.value = tdElements[3].textContent;


        
        // console.log("Edit",id);
    }
    else if(e.target.classList.contains("btn-delete")){
        // const id = e.target.dataset.id;
        // console.log("Delete",id);
        if(confirm("Are you sure to delete?")) {
            const id = e.target.dataset.id;
            let data = ref(database, `users/${id}`);
            remove(data);
        }
    }
  });
  
