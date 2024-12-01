let colors=["blue","black","white","grey","purple"];
for(let each in  colors){
  console.log(each);
}


let color=["blue","black","white","grey","purple"];
for(let each of  color){
  if(each !="white" && each!="blue")
    if(each=="black"){
      console.log("purple");
    }
  else if(each=="purple"){
    console.log("black");
  }
  else{
    console.log(each);
  }

}

let marks=[90,80,95,50,70,60]
let total=0;
for(let each of marks){
  total=total+each;
}
console.log(total);

let mark=[90,80,95,50,70,60]
let totals=0;
for(let each in mark){
  totals=totals+mark[each];
}
console.log(totals);


let markk=[90,80,95,50,70,60]
let tota=0;
for(let each in markk){
  tota=tota+markk[each];
}
console.log(tota);


let students=[{
  name:"stu1",
  age:20,
  marks:[80,90,89,94,70]
},
{
  name:"stu2",
  age:25,
  marks:[89,97,86,78,97]
},
  {
    name:"stu3",
    age:29,
    marks:[76,98,87,90,84]
  }  
             ]
for(let each of students){
  if(each.age>=25){
   
    console.log(each.name)
  }
    
}
 
   let result=0;
for(let each of students){
for(let m of each.marks){
  result=result+m;
  
}
  console.log(each.name+" "+"mark"+" "+"is"+" "+result);
  result=0;
}