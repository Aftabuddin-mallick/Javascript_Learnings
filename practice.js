// const myArr = [0, 1, 2, 3, 4];
// const myHeros = ["Shaktiman", "Naagraj"];
// const myArr2 = new Array (1, 2, 3, 4, 5);
// console.log(myArr["one"]);
// console.log(myArr[0]);
// myArr.push(6);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);
// myArr.unshift(9);
// console.log(myArr);
// myArr.shift();
// console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));
// const newArr = myArr.join();
// console.log(newArr);
// console.log("A ", myArr);
// const myn1 = myArr.slice(1, 3);
// console.log("B ",myn1);
// const myn2 = myArr.splice(1, 3);
// console.log("C ", myn2);
// console.log("D ",myArr);
// const marvel_heros = ["thor", "Ironman", "Spierman"];
// const dc_heros = ["Superman", "Flash", "Batman"];
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);
// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);
// console.log(marvel_heros);
// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);
// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const real_numbers = another_array.flat(2);
// console.log(real_numbers);
// console.log(Array.isArray("Hitesh"));
// console.log(Array.isArray(marvel_heros));
// console.log(Array.from("Hitesh"));
// console.log(Array.from({name: "Hitesh"}));
// console.log(Array.from({0: "Hitesh", length: 1}));
// const mySym = Symbol("key1");
// const Jsuser = {
//   name : "Hitesh",
//   "FullName" : "Hitesh Choudhary",
//   [mySym] : "mykey1",
//   age : 18,
//   location : "jaipur",
//   email : "hitesh@google.com",
//   isLoggedIn : false,
//   lastLoginDays : ["Monday", "Friday"]
// };
// console.log((Jsuser).email);
// console.log(Jsuser["email"]);
// Jsuser.email = "Hitesh@microsoft.com";
//  console.log(Jsuser);
// console.log(Jsuser["FullName"]);
// console.log(Jsuser.FullName);
// const course = {
//   courseName: "Js in hindi",
//   price: '999',
//   courseInstructor: "Hitesh"
// };

// const {courseInstructor: instructor} = course;
// console.log(instructor);
// console.log(course.instructor);

// const {courseInstructor} = course;
// console.log(courseInstructor);


// function sayMyName(){
//   console.log("H");
//   console.log("i");
//   console.log("t");
//   console.log("e");
//   console.log("s");
//   console.log("h");
// }

// sayMyName

// function addTwoNumbers( number1 , number2){
//   let result = number1 + number2;
//   return result;
// }

// const result = addTwoNumbers(3, null);
// console.log("Result: ", result);

// function loginUserMessage(username = "sam"){
//   if(!username){
//     console.log("Please enter a username");
//     return;
//   }
//   return `${username} just logged in`;
// }

// console.log(loginUserMessage("Aftab"));


// function calculateCartPrice(val1, val2, ...num1){
//   return num1;
// }
// console.log(calculateCartPrice(200 , 400 , 600, 2000))
// const user = {
//   username : "Hitesh",
//   price : 199
// };

// function handleObject(anyObject){
//   console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
// }

// handleObject(user);
// handleObject(
//   {
//     username:"sam",
//     price : 199
//   }
// );

// const myNewArray = [200, 300 , 400 , 500];

// function returnSecondValue(getArray){
//   return getArray[1];

// }

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue( [200, 300 , 400 , 500]));

// const user = {
//   username : "hitesh",
//   price: 999,

//   welcomeMessage: function(){
//     console.log(`${this.username} , welcome to website`);
//     console.log(this);
//   }
// }

// console.log(this)


// const chai = function(){
//   let username = "hitesh";
//   console.log(username);
// }

// chai()
// const addTwo = (num1, num2) => ({username: "Hitesh"});



// console.log(addTwo(2, 4));


// (function chai(){
//   console.log("Hitesh Chaudhuri");
// } )  ();

// (() => {
//   console.log("Aftab");
// }) ()


// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`Detected 5`);
//     break;
//   }
//   console.log(`value of index is ${index}`);
  
// }



// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`Detected 5`);
//     continue;
//   }
//   console.log(`value of index is ${index}`);
  
// // }


//  const coding = ["js", "jsx", "java"," ruby", "ts" , "HTML", "CSS"];
// // coding.forEach( function(item){
// //   console.log(item);
// // })

// // coding.forEach( (item)=> console.log(item))
// coding.forEach( (item, index, arr) => console.log(item, index, arr));

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js"
  },
  {
    languageName: "java",
    languageFileName: "java"
  },
   {
    languageName: "python",
    languageFileName: "py"
  }
];

myCoding.forEach(  (item)=> {
  console.log(item.languageFileName);
})