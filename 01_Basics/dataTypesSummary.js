// Primitive

// 7 types : String , Numebr , Boolean , null , undefined , Symbol , BigInt


// hw ; js staic typed or dynamic typed

const score = 100
const scoreValue = 100.3

const isLoggedIn  = false
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id === anotherId)


const bigNumber = 12236464664733344n


// Refrence (Non - Primitive) 

// Array, Objects , Functions

const heros = ["shaltiman" , "naagraj", "doga"];
let myObj = {
  name : "Hitesh",
  age: 22
}

const myFunction = function(){
  console.log("Hello World");
}


// all non primitive datatype is object type data types





// +++++++++++++++++++ Memory +++++++++++++++++++++++

// Stack(Primitive) , Heap (Non - Primitive)

let myYoutubeName = "HiteshChoudharydotcom";

let anotherName = myYoutubeName; // so primitive datatypes stores in stack and make copy 
// does not change from refrence so if we change anothername that means only the copy changes .

anotherName = "chaiaurcode";

console.log(myYoutubeName);
console.log(anotherName); 




let userOne = {
  email:"user@google.com",
  upi: "user@ybl"
};

// non-primitive datatypes stores in heap and changes the value fro the refrence 

let userTwo = userOne;
userTwo.email = "aftab@google.com";
console.log(userOne.email)
console.log(userTwo.email)
