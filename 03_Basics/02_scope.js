// var c = 300;
// global scope
let a = 300
if(true){ // block scope 
  let a = 10;
  const b = 20;
  // console.log(a);
  // var c = 30;
}


// console.log(a);
// console.log(b);
// console.log(c);




function one(){
  const username = "Hitesh";

  function two(){
    const website = "youtube";
    console.log(usernname);
  }

  // console.log(website);

  two();
}

// one();



if(true){
  const username = "hitesh";
  if(username === 'hitesh'){
    const website = "youtube";

    // console.log(username + website);
  }
//   console.log(website);
}

// console.log(username);


// +++++++++++  intresting +++++++++++

addOne(5); // not error
function addOne(num){
  return num+1;
}


addTwo(5); // error 
const addTwo = function(num){ // expression
  return num + 2
}
