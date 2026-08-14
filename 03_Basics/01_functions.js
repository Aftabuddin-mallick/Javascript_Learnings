


function sayMyName(){
  console.log("H");
  console.log("i");
  console.log("t");
  console.log("e");
  console.log("s");
  console.log("h");
}

//sayMyName// refrence 
// sayMyName() // execute

// function addTwoNumbers(number1 , number2){  // number1 number2 parameters 
//   console.log(number1 + number2);
  
// }

function addTwoNumbers(number1 , number2){  // number1 number2 parameters 
  // let result = number1 + number2;
  // return result;

  return number1 + number2;
  console.log("Hitesh"); // after return nothing works 
  
}

const result = addTwoNumbers(3,null); // 3,null arugments 
// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
  if(!username){
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Hitesh"));
// console.log(loginUserMessage());
// console.log(loginUserMessage("Hietsh"));


function calculateCartPrice(val1, val2, ...num1){
  return num1;
}

// console.log(calculateCartPrice(200 , 400 , 600, 2000));

const user = {
  username : "Hitesh",
  price : 199
};

function handleObject(anyObject){
  console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject(
  {
    username:"sam",
    price : 199
  }
);

const myNewArray = [200, 300 , 400 , 500];

function returnSecondValue(getArray){
  return getArray[1];

}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue( [200, 300 , 400 , 500]));
