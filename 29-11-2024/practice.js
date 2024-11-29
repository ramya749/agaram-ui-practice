let num1=45;
let num2=45;
if(num1>num2){
  console.log("num1 is maximum");
}
else if(num1<num2){
  console.log("num2 is  maximum");
}
else{
  console.log("not maximum");
}


  

let a=25;
let b=36;
let c=32;
if(a>b && a>c){
  console.log("num1 is maximum");
}
else if(b>a && b>c){
  console.log("num2 is maximum");
}
else if(c>a && c>b){
  console.log("num3 is maximum");
}
else{
  console.log("not maximum")
}

let nr=10;
if(nr>22){
  console.log("positive");
}
else if(nr<22){
  console.log("negetive");
  
}
else{
  console.log("zero")
}


let number=14;
if(number%5==0 && number%11==0){
  console.log("divided");
}
else{
  console.log("not");
}


let value=26;
if(value%2==0){
  console.log("value is even");
}
else{
  console.log("value is odd");
}


let year=2011;
if(year%4==0){
  console.log("leap year");
}
else{
  console.log("not leap year");
}

// vowels or consonent
let text="y";
if(text=="a"||text=="e"||text=="i"||text=="o"||text=="u"){
  console.log("vowels");
}
{
  console.log("consonent");
}

// alphbet digit special charcter

let given ="%";
if(given>="a" && given<="z"){
  console.log("alphabet");
}
else if(given>=0 || given<=9)
  {
    console.log("digit");
  }
else{
  console.log("special character");
}

// Upper case lower case

let character="S";
if(character>="A" && character<="Z"){
  console.log("upper case");
}
else if(character>="a"&& character<="z"){
  console.log("lower case");
}
else{
  console.log("check the case");
}

// week in days


let day=2
if(day==1){
  console.log("sunday");
}
else if(day==2){
  console.log("monday");
}
else if(day==3){
  console.log("tuesday");
}else if(day==4){
  console.log("wednesday");
}else if(day==5){
  console.log("thursday");
}else if(day==6){
  console.log("friday");
}
else if(day==7){
  console.log("saturday");
  
}
else{
  console.log("check")
}    

// number of days in month
let input=3;
let months=[
  {month:"january",days:31},
  {month:"february",days:28},
  {month:"march",days:31},
  {month:"april",days:30},
  {month:"may",days:31},
  {month:"june",days:30},
  {month:"july",days:31},
  {month:"august",days:31},
  {month:"september",days:30},
  {month:"october",days:31},
  {month:"november",days:30},
  {month:"december",days:31}
]
console.log(months[input-1].days);


// angles of triangle

let angle1=60;
let angle2=60;
let angle3=60;
if(angle1+angle2+angle3==180){
  console.log("valid");
}
else{
  console.log("not");
}

// sides od triangle
let side1=30;
let side2=30;
let side3=70;
if(side1+side2<side3){
  console.log("valid");
}
else{
  console.log("not");
}

// equilateral, isosceles or scalene triangle
  
let angles1=10;
let angles2=40;
let angles3=40;
if(angles1==angles2 && angles2==angles3 && angles3==angles1){
  console.log("equilateral");
}
else if(angles1==angles2 ||angles2==angles3 ||angles3==angles1 ){
  console.log("isosceles");
}
else{
  console.log("scalene");
}

// // profit or loss

let sp=1000;
let cp=500;
if(sp-cp>0){
  console.log("profit");

}
else{
  console.log("loss");
}
