// Immediately Invoked Function Expressions (IIFEki)

(function chai (){
  // named IIFE
  console.log(`DB CONNECTED`);
}) () ;


( (name) => { // un_named IIFE
  console.log(`DB CONNECTED TWO ${name}`);
}) ('hitesh')