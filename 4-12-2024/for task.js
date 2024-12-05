// Write a program that uses a for loop to count the number of vowels in a given string.
let value=0;
let text="Javascript is fun";
for(let each of text){
  if(each=="a"|| each=="e"|| each=="i"|| each=="o"|| each=="u"){
   value=value+each;
  
  }    
}
console.log(value);
console.log(value.length);

// Write a for loop that iterates from 1 to 100:
// ● If the number is divisible by 3, print Fizz.
// ● If divisible by 5, print Buzz.
// ● If divisible by both 3 and 5, print FizzBuzz.
// ● Otherwise, print the number

let number=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,
            51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100
             ]
for(let each of number){
   if(each%3==0 && each%5==0){
    console.log("FizzBuzz");
  }
  else if(each%3==0){
    console.log("Fizz");
  }
  else if(each%5==0){
    console.log("Buzz");
  }
 
  else{
    console.log(each);
  }  
  
}
// Write a for loop to calculate the sum of the first 50 natural numbers.

let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50
]
sum=0;
for(let val of numbers){
sum=sum+val;

}

console.log(sum);


// Write a for loop to print numbers from 1 to 10.
for(let a=1; a<=10;a++){
  console.log(a);
}

// ite a for loop to iterate from 1 to 20. For each number, check whether it is even or odd
// and log it to the console
for(b=1; b<=20; b++){
  if(b%2==0){
    console.log(b+" "+"is"+" "+"even");
  }
  else{
    console.log(b+" "+"is"+" "+"odd");
  }
}


// Write a for loop to find all prime numbers between 1 and 50. Use conditions to check if a
// number is prime.

for(let i=1;i<=50;i++){
  if(i!=1){
    let isprime=true;
    for(j=2;j<i;j++){
      if(i%j==0)
      {
       isprime=false;
      }
    }
   if(isprime==true){
     console.log(i+"is prime number");
   }
    else{
      console.log(i+"is not a prime number");
    }
    
  }
}

// reverse valuu "hello"

let valu="hello";
let m="";
for(let each in valu){
  m=m+valu[valu.length-(parseInt(each)+1)];
}
console.log(m);


// Write a for loop to print the following pattern:
// *
// **
// ***
// ****
// *****
let values=5;
let star="\n";
for(let i=1;i<=values;i++){
  for(let j=1;j<=i;j++){
    star=star+"*";
  }
  star=star+"\n";
}
console.log(star);

// Write a for loop to print the multiplication table of a number provided by the user. Use
// prompt to get the number
let a=2;
for(i=1;i<=10;i++){
  let multy=a*i;
  console.log(i+"*"+a+"="+multy);
}

// Given an array, use a for loop and conditions to create a new array that removes duplicate
// elemen

let x=[]
let numbe=[1,2,2,3,4,4,5,6,7,7];
for(let n of numbe){
  let count=0;
  for(let m of numbe){
    if(n==m){
      count=count+1;
    }
  }
  if(count>1){
    console.log(n+ "is duplicate");
  }
}