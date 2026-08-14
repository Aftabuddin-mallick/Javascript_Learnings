const user = {
  username : "hitesh",
  price: 999,

  welcomeMessage: function(){
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  }
}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);



// function chai(){
//   let username = "hitesh"
//   console.log(this.username); // not work because in js this keyword oly work for object not function
// }

// chai();


// const chai = function(){
//   let username = "hitesh";
//   console.log(this.username);
// }


// const chai = () => {
//   let username = "hitesh";
//   console.log(this.username);
// }

// chai()


// const addTwo = (num1, num2) => {
//   return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username: "Hitesh"});



console.log(addTwo(2, 4));