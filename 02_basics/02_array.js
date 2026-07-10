const marval_heros = ["Iron Men", "Thor", "Captain America"]
const dc_heros = ["Super Men", "Flash", "Bat Men"]
const other_heros = ["Doctor Strange", "X-Men", "Shezaam", "Star Light"]

// Puse Method (Push in Exixsting Array)

marval_heros.push(dc_heros)
console.log(marval_heros);
console.log(marval_heros[3][1]);


// Concat (Return a new Array)
const allHeros = marval_heros.concat(dc_heros)
console.log(allHeros);


// Spread Opearter
const herosList1 = [...marval_heros, ...dc_heros]
console.log(herosList1);

const herosList2 = [...marval_heros, ...dc_heros, ...other_heros]
console.log(herosList2);


// Flat Method

const oneArray = [1, 2, 3, [4, 5, 6], [7, 8, 9, [10, 11, 12, 13, [14, 15, 16, 17]]], 18, 19, 20, 21]

console.log(oneArray.flat(3));
console.log(oneArray.flat(Infinity));

console.log(Array.isArray("Murtaza"));
console.log(Array.from("Murtaza"));
console.log(Array.from({name: "Murtaza"}));             // Intresting chose key or Values bina per Array mein convert.

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400
let score5 = 500

console.log(Array.of(score1, score2, score3, score4, score5));



