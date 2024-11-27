function printmyname(){
    console.log("Ramya")
  }
  
  printmyname()
  printmyname()
  printmyname()
  
  function coursename (name){
    console.log(name)
  }
  coursename("agaram")
  coursename("hai")
  
  function additionname(fn,sn){
    let sum=(fn+sn)
    console.log(sum)
  }
  additionname(6,8)
  additionname(9,7)
  additionname(6,4)
  additionname(2,9)
  
  function subraction(f,s){
    let sub=(f-s)
    console.log(sub)
  }
  subraction(5,1)
  
  function value(f,s,t,g){
    let sum=(f+s)
    let multi=(t*g)
    console.log(sum,multi)
    console.log(sum-multi)
    
  }
  value(7,3,7,6)
  
  function fullname(p,q){
    let sum=(p+q)
    console.log(sum);  
  }
  fullname("agaram", " acadamy")
  
  let detail={
    fname:"Ramya",
    lname:"Bharathi"
  }
  function merge(object){
    console.log(object.fname+object.lname)
  }
  merge(detail)
  
  let colors=["red","black","white","green","pink"]
  let details={
    fname:"ramya",
    sname:"m",
    lname:"likes",
    ename:"colors"
  
    
  }
  function added(object){
    console.log(object.fname + " "+object.sname+" "+" "+object.lname+" "+colors.length+" "+object.ename)
  }
  added(details)
  
  
  
  function getname(name){
    return "Name is"+" "+name;  
  }
  let output=getname("Selvi")
  console.log(output)
  
  
  function add(p,q){
    return p+q ; 
  }
  let total1=add(7,8);
  console.log(total1);
  
  
  function additi(m,s){
    return m+s;
  }
  function mul(n,r){
    return n*r;
    
  }
  function subraction(finish1,finish2){
    return finish1-finish2;
  }
  
  
  let finish1 =additi(15,14);
  let finish2=mul(8,4);
  let ans=subraction(finish1,finish2);
  console.log(ans)
  
  
  let math_mark=80;
  
  if(math_mark>50){
    console.log("you are pass")
  }
  else{
    console.log("you are fail")
  }
  
  
  let gender="male"
  
  if(gender=="female"){
    console.log("color is pink")
  }
  else if(gender=="male"){
    console.log("color is blue")
  }
  else{
    console.log("color is yellow")
  }
  
  let number=7
  if(number%2==0){
    console.log("even")
  }
  else{
    console.log("odd")
  }
  
  
  function divide (n,m,k,l,j){
    return n+m+k+l+j/5;
    
  }
  let mark={
    m:90,
    t:80,
    e:60,
    s:70,
    si:50
  }
  
  
  let Ans=divide(mark.m,mark.t,mark.e,mark.s,mark.si)
  
  if(Ans>60){
    console.log("you are eligible")
  }
  else{
    console.log("you are not eligible")
  }
  
  
  
  