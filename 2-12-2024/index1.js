let m=[];
function text(){

    let email_value=document.getElementById("email_in").value;
    let pass_value=document.getElementById("pass_in").value;
    m.push({email:email_value, password:pass_value});
    if(email_value=="ramyapharathi@gmail.com" && pass_value=="1852000"){
        alert("success");
    }
    else{
        alert("fail");
    }

    // console.log(pass_value);
    // console.log(email_value);
    console.log(m);

}