// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);



// let myCreatedDate = new Date(2026 , 0 , 22);
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString())


let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // to covert in seconds date.now() gives timestamp in miliseconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


// `${newDate.getMonth()+1} and the  time is `



newDate.toLocaleString('default',{
  weekday: "long"
  
})

console.log(newDate.weekday);