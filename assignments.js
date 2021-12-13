"use strict";
/*
let whichAssignment = "Asseignment One - Variable and Strings";
let country = "Lithuania";
let continent = "Europe";
let population = 2.795;

console.log(whichAssignment);
console.log(country);
console.log(continent);
console.log(population);
*/

/*
whichAssignment = "Asseignment Two - Data Types";
let isIsland = false;
const language = "Lithuanian";

console.log(whichAssignment);
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/

/*
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
*/

/*
// Assignment  - if / else Statement

whichAssignment = "Assignment  - if / else Statement";
console.log(whichAssignment);

let populationLT = 2.795;
// let populationLT = 13;
// let populationLT = 130;
let message;

if (populationLT > 33) {
  message = "Lithuania's population is above average";
} else {
  message = `Lituania's population is ${
    33 - populationLT
  } million below average'`;
}
console.log(message);

*/

/*
// Assignment  - Type Conversion and Coercion
whichAssignment = "Assignment  - Type Conversion and Coercion";
console.log(whichAssignment);
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);
*/

/**
 * LECTURE: Equality Operators: == vs. === 
1. Declare a variable 'numNeighbours' based on a prompt input like this: 
prompt('How many neighbour countries does your country 
have?'); 
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality 
== for now) 
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' 
is greater than 1 
4. Use an else block to log 'No borders' (this block will be executed when 
'numNeighbours' is 0 or any other value) 
5. Test the code with different values of 'numNeighbours', including 1 and 0. 
6. Change == to ===, and test the code again, with the same values of 
'numNeighbours'. Notice what happens when there is exactly 1 border! Why 
is this happening? 
7. Finally, convert 'numNeighbours' to a number, and watch what happens now 
when you input 1 
8. Reflect on why we should use the === operator and type conversion in this 
situation
 */

// Equality Operators: == vs. ===

// const numNeighbours = prompt(
//   "How many neighbour countries does your country have?"
// );

/*
const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

console.log(numNeighbours);
console.log(typeof numNeighbours);

// have to match data type and value
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}

// have to match value
// if (numNeighbours == 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }
*/

/*
// Assignment  - Type Conversion and Coercion
whichAssignment = "Assignment  - Logical Operators";
console.log(whichAssignment);
// Lithuania details
const country = "Lithuania";
const language = "Lithuanian";
const population = 2.97;
const isIsland = false;

// Canada
// const country = "Canada";
// const language = "English";
// const population = 38.2;
// const isIsland = false;

// Sarah requirements
const languageENG = "English";
const isIslandSarah = false;
const populationSarah = 50;

if (
  population < populationSarah &&
  languageENG === language &&
  isIslandSarah === isIsland
) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
*/

/*
Use a switch statement to log the following string for the given 'language': 
chinese or mandarin: 'MOST number of native speakers!' 
spanish: '2nd place in number of native speakers' 
english: '3rd place' 
hindi: 'Number 4' 
arabic: '5th most spoken language' 
for all other simply log 'Great language too :D'
*/

/*
whichAssignment = "Assignment  - switch statement";
console.log(whichAssignment);

const language = "arabic";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4'");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
*/

// -------------------- CHALLENGES -----------------------------------

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

/*
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
*/

/*
Coding Challenge #3 
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy! 
Your tasks: 
1. Calculate the average score for each team, using the test data below 
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score) 
 
Test data: 
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110 
*/

/*
const dolphinsScoreFirst = 96;
const dolphinsScoreSecond = 108;
const dolphinsScoreThird = 89;

const koalasScoreFirst = 88;
const koalasScoreSecond = 91;
const koalasScoreThird = 110;

const averageDolphin =
  (dolphinsScoreFirst + dolphinsScoreSecond + dolphinsScoreThird) / 3;

const averageKoalas =
  (koalasScoreFirst + koalasScoreSecond + koalasScoreThird) / 3;

console.log(averageDolphin, averageKoalas);

if (averageDolphin > averageKoalas) {
  console.log("Dolphin Win!");
} else if (averageKoalas > averageDolphin) {
  console.log("Koalas Win!");
} else {
  console.log("It is Draw!");
}
*/

// Bonus -1
/*
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks 😉

Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
*/

/*
const dolphinsScoreFirst = 97;
const dolphinsScoreSecond = 112;
const dolphinsScoreThird = 101;

const koalasScoreFirst = 109;
const koalasScoreSecond = 95;
const koalasScoreThird = 123;

const averageDolphin =
  (dolphinsScoreFirst + dolphinsScoreSecond + dolphinsScoreThird) / 3;

const averageKoalas =
  (koalasScoreFirst + koalasScoreSecond + koalasScoreThird) / 3;

console.log(averageDolphin, averageKoalas);

// Win the teanm with higher score average and min 100 points
if (averageDolphin > averageKoalas && averageDolphin >= 100) {
  console.log("Dolphin Win!");
} else if (averageKoalas > averageDolphin && averageKoalas >= 100) {
  console.log("Koalas Win!");
} else {
  console.log("Both wins the trophy!");
}
*/

/*
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy 
 
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/
/*
const dolphinsScoreFirst = 97;
const dolphinsScoreSecond = 112;
const dolphinsScoreThird = 101;

const koalasScoreFirst = 109;
const koalasScoreSecond = 95;
const koalasScoreThird = 106;
const minScore = 100;

const averageDolphin =
  (dolphinsScoreFirst + dolphinsScoreSecond + dolphinsScoreThird) / 3;

const averageKoalas =
  (koalasScoreFirst + koalasScoreSecond + koalasScoreThird) / 3;

console.log(averageDolphin, averageKoalas);

// Win the teanm with higher score average and min 100 points
if (averageDolphin > averageKoalas && averageDolphin >= 100) {
  console.log("Dolphin Win!");
} else if (averageKoalas > averageDolphin && averageKoalas >= 100) {
  console.log("Koalas Win!");
} else if (
  averageDolphin === averageKoalas &&
  averageDolphin >= 100 &&
  averageKoalas >= 100
) {
  console.log("It is Draw!");
} else {
  console.log("No one win the trophy!");
}
*/

/*
Coding Challenge #4 
Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%. 
Your tasks: 
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!) 
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25” 
Test data: 
§ Data 1: Test for bill values 275, 40 and 430 

*/

/*
const bill = 275;
const tipRate15 = 0.15; // 15%
const tipRate20 = 0.2; // 20%

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 + bill : bill * 0.2 + bill;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const tip = bill >= 50 && bill <= 300 ? bill * tipRate15 : bill * tipRate20;
const total = bill + tip;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`
);

// console.log(
//   `Tips for waitress is ${tip}, if your bill is ${bill}, so the total is ${total}`
// );
*/

// -------------------Fundamentals - Part -2
/*
1. Write a function called 'describeCountry' which takes three parameters: 
'country', 'population' and 'capitalCity'. Based on this input, the 
function returns a string with this format: 'Finland has 6 million people and its 
capital city is Helsinki' 
2. Call this function 3 times, with input data for 3 different countries. Store the 
returned values in 3 different variables, and log them to the console
*/
/*
function describeCountry(country, population, capitalCity) {
  const countryDetails = `${country} has ${population} million people and its 
  capital city is ${capitalCity}`;
  return countryDetails;
}

const finland = describeCountry("Finland", 6, "Helsinki");
console.log(finland);

const lithuania = describeCountry("Lithuania", 2.97, "Vilnius");
console.log(lithuania);

const lv = describeCountry("Latvia", 2.5, "Riga");
console.log(lv);

const pl = describeCountry("Poland", 40, "Warsava");
console.log(pl);
*/

/*
LECTURE: Function Declarations vs. Expressions 
1. The world population is 7900 million people. Create a function declaration 
called 'percentageOfWorld1' which receives a 'population' value, and 
returns the percentage of the world population that the given population 
represents. For example, China has 1441 million people, so it's about 18.2% of 
the world population 
2. To calculate the percentage, divide the given 'population' value by 7900 
and then multiply by 100 
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, 
store the results into variables, and log them to the console 
4. Create a function expression which does the exact same thing, called 
'percentageOfWorld2', and also call it with 3 country populations (can be 
the same populations) 
*/

function percentageOfWorld1(population) {
  return `${(population / 7900) * 100}`;
}
const china = percentageOfWorld1(1441);
const india = percentageOfWorld1(1380);
const us = percentageOfWorld1(331);

console.log(`China population is ${china}% of all world's population`);
console.log(`India population is ${india}% of all world's population`);
console.log(`US population is ${us}% of all world's population`);

// Function expression
const percentageOfWorld2 = function (population) {
  return `${(population / 7900) * 100}`;
};

const china2 = percentageOfWorld2(1441);
const india2 = percentageOfWorld2(1380);
const us2 = percentageOfWorld2(331);

console.log(china2);
console.log(india2);
console.log(us2);
