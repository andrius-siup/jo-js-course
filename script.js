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

/*
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
*/

/*
// Type conversion and Coercion
// type conversion
const inputYear = "1991";
// converted string in a number
console.log(Number(inputYear), inputYear);

console.log(inputYear);
console.log(Number(inputYear) + 18); // 2009
console.log(Number("Amdrius")); // NaN  - not a number
console.log(typeof NaN); // number

console.log(String(23), 23); //23 23

// type coercion - js automaticly convert from num to str and vica versa
console.log("I am " + 23 + " years old.");
console.log("23" - "10" - "3"); // 10
console.log("23" + "10" + "3"); // 23103
console.log(23 + 10 + "3"); // 333
console.log("10" - "4" - "3" - 2 + "5"); // 15
console.log("23" * "2"); // 46
console.log("23" / "2"); // 11.5

let n = "1" + 1; // concatenate = 11
n = n - 1; // n = 11 - 1 = 10 - minus operator convert to number
console.log(n); // 10
*/

/*
// Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Andrius")); // string  true
console.log(Boolean({})); // empty object true
console.log(Boolean("")); // empty string false

//const money = 0;  // false
const money = 100; // true
if (money) {
  console.log("Don't spend it all.");
} else {
  console.log("You should get a job!");
}

let height = 0; // false cause boolen of zero is false
//let height = 123;  // true
//let height; // cause don't have a value - is undefined - and by boolean is false
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

/*
// Equality Operators: == vs ===
//const age = 18;
const age = "18";
if (age === 18) console.log("You just became an adult (strict)"); // type and value

if (age == 18) console.log("You just became an adult (loose)"); // value

const favourite = Number(prompt("what is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

// if (favourite == 23) {
//   console.log("Cool! 23 is an amazing number!");
// }

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else {
//   console.log("It is same number but diff type!");
// }

// Checked the numbers 23 and 7
if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also cool number!");
} else {
  console.log("The number is not 7 or 23!");
}

// Checked the number 23
if (favourite !== 23) {
  console.log("Why not 23?");
} else {
  console.log("Amazing! The number is 23!");
}
*/
