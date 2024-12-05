let resume={
    personal_details:{},
    skills:[],
    hobbies:[],

}

function addValue(e,key,p_key){
    if(p_key){
      resume[p_key][key] = e.value; 
    }else{
      resume[key] = e.value;
    }
    display_output();
  }
function addArrayValue(key){
    let value=document.getElementById(key).value;
    resume[key].push(value);
    document.getElementById(key).value="";
    display_output();
}


function display_output(){
    document.getElementById('output').innerHTML=JSON.stringify(resume)
}