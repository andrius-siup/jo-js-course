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

/*
// ------------------------------ Reviewing Functions

// Calculate age
const calcAge = function (birthYear) {
  return 2021 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  //return retirement;
  //return `${firstName} retires in ${retirement} years.`;

  // Checked if already retired?
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired.`);
    return -1; // here for those who already retired
  }
};

console.log(yearsUntilRetirement(1985, "Andrius"));
console.log(yearsUntilRetirement(1955, "Mike"));
*/

/*
// ------------------------------ Introduction to Arrays
const friend1 = "Michael";
const friend2 = "Tadas";
const friend3 = "Jonas";

// Array
const friends = ["Michael", "Tadas", "Jonas"];

console.log(friends); // print array
console.log(friends.length); // 3

console.log(friends[friends.length - 1]); // print last index - Jonas

console.log(friends[2]); // print 3rd index - Jonas

friends[2] = "Jay";
console.log(friends);

// print all friends
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}

// const years = new Array(1985, 1990, 1995, 2000);
// console.log(years[0]);

const firstName = "Andrius";
const andrius = [firstName, "Siupinys", 2021 - 1985, "coder", friends];
console.log(andrius);
console.log(andrius.length);

// Exercise
const calcAge = function (birthYear) {
  return 2021 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

console.log("Exercise");
//console.log(calcAge(years)); // NaN
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

// put functions into array
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

/*
// ------------------------------ Array methods
const friends = ["Michael", "Tadas", "Jonas"];
// add elements
const newLenght = friends.push("Kazys");

console.log(friends);
console.log(newLenght);

// unshift() method is used to add one or more elements to the beginning of the given array
friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(); // removed last element
const popped = friends.pop(); // removed last element and store in variable

console.log(popped);
console.log(friends);

friends.shift(); // Removed first element
console.log(friends);

console.log(friends.indexOf("Tadas")); // return value 1
console.log(friends.indexOf("Bobas")); // return value -1, cause is not in array

console.log(friends.includes("Tadas")); // return value true
console.log(friends.includes("Bobas")); // return false, cause isn't in array

friends.push(23);
console.log(friends.includes("23")); // return false, cause we use strict mode
console.log(friends.includes(23)); // return value true

if (friends.includes("Tadas")) {
  console.log("You have a friend called Tadas");
}
*/

/*
// -------------------------- Introduction Objects
// array
const andreArray = [
  "Andrius",
  "Siupinys",
  2021 - 1985,
  "coder",
  ["Tadas", "Jonas", "Kazys"],
];
// object
const andre = {
  firstName: "Andrius",
  lastName: "Siupinys",
  age: 2021 - 1985,
  job: "coder",
  friends: ["Tadas", "Jonas", "Kazys"],
};
console.log(andre);

// dot notation
console.log(andre.lastName);

// brackects notation we can put expressions
console.log(andre["lastName"]);

const nameKey = "Name";
console.log(andre["first" + nameKey]); // firstName - Andrius
console.log(andre["last" + nameKey]); // lastName - Siupinys

console.log(andre["friends"]);
// example

const intrestedIn = prompt(
  "What do you want about Andrius? Choose between firstNAme, lastName, age, job, and friends"
);

// console.log(andre[intrestedIn]);

// created if /else cause can be input wrong word
if (andre[intrestedIn]) {
  console.log(andre[intrestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstNAme, lastName, age, job, and friends"
  );
}

// add data to object
andre.location = "Ireland";
andre["twitter"] = "@andriusiup";
console.log(andre);

// Challenge
// 'Andrius has 3 friends, and his best friend is called Tadas(first element in object)'
console.log(
  andre.firstName +
    " has " +
    andre.friends.length +
    " friends, and his best friend called " +
    andre.friends[0] +
    "."
);

console.log(
  `${andre.firstName} has ${andre.friends.length} friends, and his best friend called ${andre.friends[0]}.`
);
*/

/*
// ------------------------------------- Object methods
const andre = {
  firstName: "Andrius",
  lastName: "Siupinys",
  birthYear: 1985,
  job: "coder",
  friends: ["Tadas", "Jonas", "Kazys"],
  hasDriverLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  
  // calcAge: function () {
  //   //console.log(this); // with 'this' can use all object
  //   return 2037 - this.birthYear;
  // },
  
  calcAge: function () {
    this.age = 2037 - this.birthYear; // create variable age with value
    console.log(this);
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} - year old ${
      this.job
    } , and he has ${this.hasDriverLicense ? "a" : "no"} a driver's license.`;
  },
};

console.log(andre.calcAge()); // dot notation

console.log(andre.age); // value of age will be printed
console.log(andre.age);
console.log(andre.age);

//console.log(andre["calcAge"](1985)); // bracket notation

// Challenge
// "Andrius is a 52-year old  coder, and he has a driver's license."
console.log(
  `${andre.firstName} is a ${andre.calcAge()} - year old ${
    andre.job
  } , and he has ${andre.hasDriverLicense ? "a" : "no"} a driver's license.`
);

console.log(andre.getSummary());
*/
/*
// ------------------------------------------ Iteration: the for loop
// console.log("Lifting weights repetition 1 🏋️‍♀️");
// console.log("Lifting weights repetition 2 🏋️‍♀️");
// console.log("Lifting weights repetition 3 🏋️‍♀️");
// console.log("Lifting weights repetition 4 🏋️‍♀️");
// console.log("Lifting weights repetition 5 🏋️‍♀️");
// console.log("Lifting weights repetition 6 🏋️‍♀️");
// console.log("Lifting weights repetition 7 🏋️‍♀️");
// console.log("Lifting weights repetition 8 🏋️‍♀️");
// console.log("Lifting weights repetition 9 🏋️‍♀️");
// console.log("Lifting weights repetition 10 🏋️‍♀️");

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

for (let rep = 0; rep < 10; rep++) {
  console.log(`Lifting weights repetition ${rep + 1} 🏋️‍♀️`);
}
*/

/*
// Looping array, Breaking, Countinuing
const andreArray = [
  "Andrius",
  "Siupinys",
  2021 - 1985,
  "coder",
  ["Tadas", "Jonas", "Kazys"],
  true,
];
const types = [];

for (let i = 0; i < andreArray.length; i++) {
  // Reading from andreArray
  console.log(andreArray[i], typeof andreArray[i]);

  // Filling types array
  //types[i] = typeof andreArray[i];

  types.push(typeof andreArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
let ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]); // push to the array
}
console.log(ages);

// continue and break
console.log("--- only strings ---");
for (let i = 0; i < andreArray.length; i++) {
  if (typeof andreArray[i] !== "string") continue;
  // Reading from andreArray
  console.log(andreArray[i], typeof andreArray[i]);
}

console.log("--- Break with number ---");
for (let i = 0; i < andreArray.length; i++) {
  // When number found, stopped the looping and printed everything before number
  if (typeof andreArray[i] === "number") break;
  // Reading from andreArray
  console.log(andreArray[i], typeof andreArray[i]);
}
*/

/*
const andreArray = [
  "Andrius",
  "Siupinys",
  2021 - 1985,
  "coder",
  ["Tadas", "Jonas", "Kazys"],
];

// 0,1,2,3,4
//4,3,2,1,0

// i = 5-1=4; true till 0 ; minus one down each iteration, 4,3,2,1,0
for (let i = andreArray.length - 1; i >= 0; i--) {
  console.log(i, andreArray[i]);
}

// Loop in another loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------ Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}
*/

// ------------------------------------------- while loop
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
//do / while loop
do {
  console.log(`DO/WHILW: Lifting weights repetition ${rep}`);
  rep++;
} while (rep <= 10);

// while
let reps = 1;
while (reps <= 10) {
  console.log(`WHILE: Lifting weights repetition ${reps}`);
  reps++;
}
*/

/*
// The Math.trunc() function returns the integer part of a number by removing any fractional digits.
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

// stopped when dice 6
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) console.log("Loop is about to end...");
}
*/
// Problem 1:
/*
We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temp amplitude. Keep in mind that sometimes there might be a sensor error."
*/
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: diff between highest and lowest temp
// - How to compute max and min temps?
// - What's sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

/*
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    // fouded error
    if (typeof currTemp !== "number") continue;

    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
*/
// Problem 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge two arrays?
/*
const calcTempAmplitudeNew = function (t1, t2) {
  // concatinate two arrays
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    // fouded error
    if (typeof currTemp !== "number") continue;

    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // c) fix
    value: Number(prompt("Degrees celsius")),
  };

  // b) find a bug
  console.log(measurement); // value write in string, by default of prompt
  console.table(MediaSource);
  //console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// a) Identify bug
console.log(measureKelvin());
