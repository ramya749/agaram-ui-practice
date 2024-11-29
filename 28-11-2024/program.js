let details={
    name:"agaram",
    age:1,
    skills:["python","React","mysQl"],
    Batches:[{
      name:"Batch1",
      year:2023,
      students:[{
        name:"bhuvana",age:22,skills:["python","Aws"]},
        {name:"renisha",age:21,skills:["HTML","Es6"]},
        {name:"Azim",age:20,skills:["js","MySQl"]}        
        
      ]
    },
             {name:"Batch2",
             year:2024,
             students:[{name:"Amirtha",age:20,skills:["css","Datastructure"]},
            ]}
  ]
  }

  let tmp1=details.Batches[0].students;
  console.log(tmp1[0].skills[0]+","+tmp1[0].skills[1]+","+tmp1[1].skills[0]+","+tmp1[1].skills[1])

  
  if(details.Batches[0].students[0].age==20){
      console.log(details.Batches[0].students[0].name)
    }
  
  if(details.Batches[0].students[1].age==20){
      console.log(details.Batches[0].students[1].name)
    }
  
  if(details.Batches[0].students[2].age==20){
      console.log(details.Batches[0].students[2].name)
    }
  if(details.Batches[1].students[0].age==20){
      console.log(details.Batches[1].students[0].name)
    }


    details.Batches.push(
        {name:"Batch3",
                   year:2024,
                   students:[{name:"manju",age:26,skills:["css","Datastructure,Bootsrap"]},
                  ]}
        );
        
        console.log(details.Batches[2]);

        details.Batches.push(
            {name:"Batch4",
                     year:2024,
                     students:[{name:"ajiba",age:26,skills:["css","Bootsrap"]},
                               {name:"athu",age:20,skills:["react","flash"]}
                    ]}
          );
          console.log(details.Batches[3]);
          
          details.Batches[3].students[0].name="vika";
          console.log(details.Batches[3].students[0]);
          
let marks={
    tamil:90,
    maths:100,
    english:70,
    computer_science:60,
    physics:60,
    chemistry:50
    
  }
  
  if(marks.maths>50 && marks.computer_science>70){
    console.log("you are eligible");
  }
  else{
    console.log("you are not eligible");
  }
  
  if(marks.maths>50 || marks.computer_science>50){
    console.log("you are eligible");
  }
  else{
    console.log("you are not eligible");
  }
  
  let mark={
    tamil:90,
    maths:100,
    english:70,
    computer_science:60,
    physics:80,
    chemistry:50
    
  }
  
  
  if((mark.maths>70 && mark.physics>70 && mark.chemistry>70)||(mark.maths>80 && mark.computer_science>80 )){
    console.log("you are selected");
  }
  
  else{
    console.log("not selected");
  }
    
  let result={
    physics:70,
    maths:100,
    chemistry:80,
    computer:80,
    biology:30
    }
    
  
    let total=(result.maths+result.biology+result.computer+result.physics+result.chemistry);
    let percentage=total/5;
  console.log(percentage);
  if(percentage>=90){
     console.log("Grade A");
    
  }
  else if(percentage>=80){
          console.log("Grade B");
    
  }
  else if(percentage>=70){
          console.log("Grade C");
    
  }else if(percentage>60){
          console.log("Grade D");
    
  }else if(percentage>=40){
          console.log("Grade E");
    
  }
  else if(percentage<40){
    console.log("Grade F")
  }



 if( details.Batches[0].students[0].skills){
    console.log(details.Batches[0].students[0].sklills[0]+""+details.Batches[0].students[0].sklills[1]+""+""+details.Batches[0].students[0].sklills[2]+""+details.Batches[1].students[0].sklills[0])
    }
      
     details.Batches[0].students[0].skills.push("java"){
      console.log(details.Batches[0].students[0].skills);
    }