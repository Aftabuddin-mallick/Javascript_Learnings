 // array


const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ['shaktiman','naagraj']
const myArr2 = new Array(1, 3, 4, 5);
// // console.log(myArr["one"]) ; // wrong

// console.log(myArr[0]);


// array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9);
// myArr.shift();


// console.log(myArr.includes(9)) 
// console.log(myArr.indexOf(2)) // index of that number which not exits in my arrray then it gives -1

const newArr = myArr.join() // convert array to string , seperated

// console.log(myArr);
// console.log(newArr); 


// slice , splice

console.log("A " , myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ",myArr);



const myn2 = myArr.splice(1,3);
console.log("C ",myArr);
console.log(myn2);


// slice does not manipulate original array 
// splice manipulates original array


