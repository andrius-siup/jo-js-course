"use strict"; // activating strict mode show error

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");

// reserved, strict not allowed
// const interface = "Audio";
// const private = 534;
// const if = false;
*/

/*
// -------------------------- Functions
function logger() {
  console.log("My name is Andrius");
}
// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  //console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
// ------------------------------ Function Declarations vs. Expressions
// Function declaration
function calcAge1(birthYear) {
  // const age = 2021 - birthYear;
  // return age;
  return 2021 - birthYear; // same as above
}

const age1 = calcAge1(1985);

// Function expression
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};

const age2 = calcAge2(1985);
console.log(age1, age2);
*/

/*
// ------------------------------ Arrow Function
// Function expression
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};

// Arrow function
const calcAge3 = (birthYear) => 2021 - birthYear;
const age3 = calcAge3(1985);
console.log(age3);

// calculate how many years left until retirement
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};
console.log(yearsUntilRetirement(1985, "Andrius"));
console.log(yearsUntilRetirement(1990, "Jurate"));
*/

/*
// ------------------------------ Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange`;
  return juice;
}

// const appleJuice = fruitProcessor(2, 3);
// console.log(appleJuice);
console.log(fruitProcessor(2, 3));
*/

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1985, "Andrius"));
