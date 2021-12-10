let whichAssignment = "Asseignment One - Variable and Strings";
let country = "Lithuania";
let continent = "Europe";
let population = 2.795;

console.log(whichAssignment);
console.log(country);
console.log(continent);
console.log(population);

whichAssignment = "Asseignment Two - Data Types";
let isIsland = false;
const language = "Lithuanian";

console.log(whichAssignment);
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

whichAssignment = "Asseignment Three - let, const and var";
languageSecond = "Russian";

console.log(whichAssignment);
console.log(language);
console.log(languageSecond);

whichAssignment = "Asseignment  - Basic Operators";
let splitPopulation = population / 2;
const populationFinland = 6;

console.log(whichAssignment);
console.log(splitPopulation);
population += 1;
let averagePopulationInCountry = 33;
let description =
  "Portugal is in Europe, and its 11 million people speak portuguese";
console.log("Populations increased by one" + " = " + population);

console.log(
  "FIn " + populationFinland + " mln",
  "LT " + population + " mln",
  "LT > FIN",
  population > populationFinland
);

console.log(
  "Does LT is less thatn average population?",
  averagePopulationInCountry >= population
);

console.log(description);

whichAssignment = "Asseignment  - Strings and Template Literals";
description = `Portugal is in Europe, and its 11 million people speak portuguese.`;

console.log(description);

/**
  JavaScript Fundamentals – Part 1 
 
  Coding Challenge #1 
  Mark and John are trying to compare their BMI (Body Mass Index), which is 
  calculated using the formula: 
  BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
  and height in meter). 
  Your tasks: 
  1. Store Mark's and John's mass and height in variables 
  2. Calculate both their BMIs using the formula (you can even implement both 
  versions) 
  3. Create a Boolean variable 'markHigherBMI' containing information about 
  whether Mark has a higher BMI than John. 
  Test data: 
  § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
  m tall. 
  § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
  m tall. 
 */

/*
// CHALLENGE PART-1


console.log("CHALLENGE PART-1 - DATA -1");

let weightMark = 78;
let heightMark = 1.69;
let weightJohn = 92;
let heightJohn = 1.95;

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

// Both formula is correct
// bmiMark = weightMark / heightMark ** 2;
bmiMark = weightMark / (heightMark * heightMark);

bmiJohn = weightJohn / (heightJohn * heightJohn);

let markHigherBMI = bmiMark > bmiJohn;

console.log("Mark BMI - Data 1 " + ": " + bmiMark);
console.log("John BMI - Data 1 " + ": " + bmiJohn);
console.log("Mark has higher BMI ? " + markHigherBMI);

console.log("CHALLENGE PART-1 - DATA - 2");

let weightMarkD2 = 95;
let heightMarkD2 = 1.88;
let weightJohnD2 = 85;
let heightJohnD2 = 1.75;

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

// Both formula is correct
// bmiMark = weightMark / heightMark ** 2;
bmiMarkD2 = weightMarkD2 / (heightMarkD2 * heightMarkD2);

bmiJohnD2 = weightJohnD2 / (heightJohnD2 * heightJohnD2);

let markHigherBMId2 = bmiMarkD2 > bmiJohnD2;

console.log("Mark BMI - Data 2 " + ": " + bmiMarkD2);
console.log("John BMI - Data 2 " + ": " + bmiJohnD2);
console.log("Mark has higher BMI ? " + markHigherBMId2);
*/

/**
Coding Challenge #2 
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it. 
Your tasks: 
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's 
BMI (28.3) is higher than John's (23.9)!"
 */

console.log("CHALLENGE PART-1 - CHALLENGE - 2");

let weightMark = 78;
let heightMark = 1.69;
let weightJohn = 92;
let heightJohn = 1.95;

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

// Both formula is correct
// bmiMark = weightMark / heightMark ** 2;
bmiMark = weightMark / (heightMark * heightMark);

bmiJohn = weightJohn / (heightJohn * heightJohn);

let markHigherBMI = bmiMark > bmiJohn;

console.log("Mark BMI" + ": " + bmiMark);
console.log("John BMI" + ": " + bmiJohn);
console.log("Mark has higher BMI ? " + markHigherBMI);
let message;

if (bmiMark > bmiJohn) {
  message = `Mark's BMI ${bmiMark} is higher than John's ${bmiJohn}!`;
} else {
  message = `John's BMI is higher than Mark's!`;
}

console.log(message);
