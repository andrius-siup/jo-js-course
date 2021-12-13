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
