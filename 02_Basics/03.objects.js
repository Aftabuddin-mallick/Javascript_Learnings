// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const Jsuser = {
  name : "Hitesh",
  "FullName" : "Hitesh Choudhary",
  [mySym] : "mykey1",
  age : 18,
  location : "jaipur",
  email : "hitesh@google.com",
  isLoggedIn : false,
  lastLoginDays : ["Monday", "Friday"]
};


// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["FullName"]);
console.log(Jsuser[mySym]);


// Jsuser.email = "Hitesh@chatgpt.com";
// Object.freeze(Jsuser);
// Jsuser.email = "Hitesh@microsoft.com";
// console.log(Jsuser);



Jsuser.greeting = function(){
  console.log("hello js user");
}
Jsuser.greetingtwo = function(){
  console.log(`hello js user,${this.FullName}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());
