/*
// numbers and string
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Andrius");

let firstName = "Andrius";
console.log(firstName);

let PI = 3.1415;

*/

/*
// --------------  Data Types

let javascriptIsFun = true;
console.log(javascriptIsFun);

// shows data type is
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof "Andrius");

// changes the variable value
javascriptIsFun = "YES!";
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);

*/

/*
// --------------  let, const and var
// let - used let for mutate variable - can be change later in code
let age = 30;
age = 35;

console.log(age);

// const - cannot be change
const birth = 1991;
// shows error
//birth = 1995;
// used const for default but when you know that your variable need to change use let

// never use var - it same as let bet for modern js not using anymore
var job = "programmer";
job = "coder";
console.log(job);
*/

/*
// --------------  Basic operators
const now = 2037;
const ageAndrius = now - 1985;
const ageSarah = now - 2018;
console.log(ageAndrius, ageSarah);

// 2**3 means 2 to the power of 3 = 2*2*2=8
console.log(ageAndrius * 2, ageAndrius / 10, 2 ** 3);

// concatenate
const first = "Andrius";
const last = "Siupaila";
console.log(first + " " + last);

// assignment operator
let x = 10 + 5; // 15
x += 10; // x + 10 = 25
x *= 4; // x * 4 = 100
x++; // x + 1 = 101
x--;
x--; // x - 1 = 99
console.log(x);

// Comparison operators > < >= <= == ===
console.log(ageAndrius > ageSarah); // true
console.log(ageSarah >= 18); // true

const isFullAge = ageSarah >= 18;
console.log("Sarah is adlut : " + isFullAge);

// same code as above
console.log(now - 1985 > now - 2018);
*/

/*
// Operator Procedence
// Table: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

const now = 2037;
const ageAndrius = now - 1985;
const ageSarah = now - 2018;

console.log(now - 1985 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

// need parentheses (...)
// averageAge = ageAndrius + ageSarah / 2;
averageAge = (ageAndrius + ageSarah) / 2;

console.log(averageAge);
console.log(ageAndrius.ageSarah);
*/

/*
// Strings and Template Literals
const firstName = "Andrius";
const job = "coder";
const birthYear = 1985;
const year = 2037;

const andrius =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

// easiest way - with backticks
const andriusNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

console.log(andrius);
console.log(andriusNew);
console.log(`Jus a regular string...`);

// new line - \n
console.log("String with \n\
multiple \n\
lines");

// with backticks - simple way - creates automaticly new lines
console.log(`String with
multiple
lines`);
*/

// if / else statements
const age = 12;

if (age >= 18) {
  console.log("Sarah can start driving licence 🚗");
} else {
  const yearLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearLeft} years :)`);
}

const birtYear = 2008;
let century;
if (birtYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
