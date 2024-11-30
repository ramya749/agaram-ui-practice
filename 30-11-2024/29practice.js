// count total number of notes in given amount
let amount=5250;
if(amount>=500){
  let no_notes=Math.floor(amount/500);
  console.log("500 notes count"+no_notes);
  amount=amount%500;
  
}
if(amount>=200){
  let no_notes=Math.floor(amount/200);
  console.log("200 notes count"+no_notes);
  amount=amount%200;
}
if(amount>=100){
  let no_notes=Math.floor(amount/100);
  console.log("100 notes count"+no_notes);
  amount=amount%100;
}
if(amount>=50){
  let no_notes=Math.floor(amount/50);
  console.log("50 notes count"+no_notes);
  amount=amount%50;
}
if(amount>=20){
  let no_notes=Math.floor(amount/20);
  console.log("20 notes count"+no_notes);
  amount=amount%20;
}
if(amount>=10){
  let no_notes=Math.floor(amount/10);
  console.log("10 notes count"+no_notes);
  amount=amount%10;
}

//  program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

let basic_salary=24567;
let hra=20;
let da=80;
if(basic_salary<=10000){
  hra=20;
  da=80;
}
else if(basic_salary<=20000){
  hra=25;
  da=90;
}
else if(basic_salary>20000){
  hra=30;
  da=95;
}
let hra_amount=basic_salary*hra/100;
let da_amount=basic_salary*da/100;
let final=basic_salary+hra_amount+da_amount;
console.log(final);


let units=145;
let price=0;

if(units>250){
  price=25+75+120+(units-250)*1.5;
}
else if(units>150){
  price=25+75+(units-150)*1.2;
}
else if(units>100){
  price=25+(units-50)*7.5;
}
else if(units>50){
  price=25+(units-50)*7.5;
}
else{
  price=units*0.5;
}
let surcharge=(price*20)/100;
console.log(surcharge);