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
      each.eligible=true;
         each.skills=["python ,css"]
    }
       else{
          each.eligible=false;
        
       }
        
   
    }   
  console.log(students);
  
  let m=[]
  for(let each of students){
    if (each.age>=25){
    m.push(each.name);
     
    }
  }
   console.log(m); 
//     Write a JavaScript program that displays the largest integer among array of integers

  let value=[3,5,6,2,5,28,12,56,32];
  let high=0;
  for(let num of value) {
    if (num>high){
      high=num;
  }
  }
  console.log(high);
  
  // JavaScript conditional statement to find the sign of the product of all numbers in array. Display an alert box with the specified sign
  
  let values=[2,-6,2,4,-8,-2,9,-11];
  let total=0;
  for(let number of values){
    total=number+total;
  }
    if(total>=0){
      console.log("+");
    }
    else{
      console.log("-");
    }
     console.log(total);

// reverse value     
let sett=[2,3,4];
let temp=[];
for(let i in sett){
 

temp.push(sett[sett.length-(parseInt(i)+1)]);
 
} 
console.log(temp);
sett=temp;
console.log(sett);