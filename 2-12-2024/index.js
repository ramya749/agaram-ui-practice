function login(){


let email_value=document.getElementById("email_input").value;
let pass_value=document.getElementById("pass_input").value;
if(email_value=="ramyabharathi@gmail.com" && pass_value=="12345"){
    alert("success");
}
else{
    alert("fail");
}



console.log(email_value);
console.log(pass_value);
}