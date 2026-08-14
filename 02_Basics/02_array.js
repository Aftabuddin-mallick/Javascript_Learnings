const marvel_heros = ["thor" ,"Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros); // gives array under array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1])  //flash

// const all_heros = marvel_heros.concat(dc_heros);  // not concat in exiting array in new array
// // console.log(marvel_heros)
// console.log(all_heros);


// const all_new_heros = [...marvel_heros, ...dc_heros]; // prefer to add multiple arrays 
// // console.log(all_new_heros);


// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// const real_another_array = another_array.flat(Infinity) // under flat we give the depth from which we to converta single array infinity means all converted in single arrray
// console.log(real_another_array);


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "Hitesh"}));  // intresting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));