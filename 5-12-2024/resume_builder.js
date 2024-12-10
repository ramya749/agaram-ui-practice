let resume = {
    personal_details: {},
    skills: [],
    hobbies: [],
    education: [],
    project: []

}
console.log(resume.name)
function addValue(e, key, p_key) {
    if (p_key) {
        resume[p_key][key] = e.value;
    } else {
        resume[key] = e.value;
    }
    display_output();
}
function addArrayValue(key) {
    let value = document.getElementById(key).value;
    resume[key].push(value);
    document.getElementById(key).value = "";
    display_output();
}
function addMultiValue(p_key, key1, key2, key3, key4) {
    let newObj = {};
    newObj[key1] = document.getElementById(key1).value;
    newObj[key2] = document.getElementById(key2).value;
    newObj[key3] = document.getElementById(key3).value;
    newObj[key4] = document.getElementById(key4).value;
    resume[p_key].push(newObj)
    document.getElementById(key1).value = "";
    document.getElementById(key2).value = "";
    document.getElementById(key3).value = "";
    document.getElementById(key4).value = "";
    display_output()
}


function display_output() {
    document.getElementById('output').innerHTML = JSON.stringify(resume)
}