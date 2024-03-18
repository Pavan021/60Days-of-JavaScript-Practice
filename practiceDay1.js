//enabling strict mode to prevent accidental errors
"use strict";

let nni = "pavan";

// if else statement
if ((nni = "pavan")) {
  console.log("the name is pavan");
} else {
  alert("the name is not showing!!");
}

//using ternary operator
let age = 23;
const drink = age < 18 ? "Water" : "Wine";
console.log(drink);

// ternary in console
console.log(`I want to drink ${age < 18 ? "Water" : "Wine"}`);

//functions

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} Oranges`;
  return juice;
}

//need to save value returned
const fruitJuice = fruitProcessor(5, 7);
console.log(fruitJuice);

//in-built function
const number = Number("234");
console.log(number);

// 1.function declaration
function ageCal1(birthYear) {
  //function with name
  const age1 = 2023 - birthYear;
  return age1;
}

const age1 = ageCal1(2000);
console.log(age1 + "function declaration");

//2.function expression
let ageCal2 = function (birthYear) {
  //function without name
  const age2 = 2023 - birthYear;
  return age2;
};

const age2 = ageCal2(2000);
console.log(age2 + "function expression");

//Arrow function
//1. only one parameter
const age3 = (birthYear) => 2023 - birthYear;
const ageArrow = age3(2000);
console.log(ageArrow + "Arrow Function");

//2.multiple parameters
let yearsToRetire = (birthYear, nameOfPerson) => {
  const currentAgeOfPerson = 2023 - birthYear;
  const retirement = 65 - currentAgeOfPerson;
  return retirement;
};

console.log(yearsToRetire(1999, "harry"));

//function inside another function
function fruitCutToPieces(fruits) {
  return fruits * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = fruitCutToPieces(apples);
  const orangePieces = fruitCutToPieces(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} Oranges`;
  return juice;
}

console.log(fruitProcessor(5, 7));

//-----------practice
function displyUser(nameOfPerson) {
  console.log(`Hi i am ${nameOfPerson} and i'm washing my shoes`);
}

//Function declaration 
function myAge(CurrentAge)
{
  currentYear1 = 2024;
  return currentYear1 - CurrentAge;
}

//Function Expression
let juiceBlend = function (butterFruit, Jackfruits)
{
  return `juice with ${butterFruit} butterfruits and ${Jackfruits} jackfruits`;
}

//Arrow functions
let firstSchool = (year) => year-2024;
console.log('i have joined school' + firstSchool(2000) + 'years ago');


displyUser("chaithra");

//------------------------------------------------------------------
//ARRAYS

//1.with literals
const friends = ["veeraj", "naveen", "sravya"];

//2. with new keyword
const bestFriends = new Array("nayana", "ningraj");

console.log(friends);
console.log(bestFriends);

friends[2] = "sagar";
console.log(friends);

//Array can hold any type of data
const scores = ["first", 80, friends, 2344 - 1766];
console.log(scores);

//accessing array elements by indices
console.log(scores.length);
console.log(scores[scores.length - 1]);

//-------------------------------------------------------------

//BASIC ARRAY OPERATIONS
const carsOwned = ["swift", "lamborghini", "porsche", "Nexon"];

//ADDING ELEMENTS
//push()--------adding elements to end of array and returns length of array
let lengthAfterPush = carsOwned.push("mercedes");
console.log(carsOwned, lengthAfterPush);

//unshift()--------adding elements at beginning of array and returns length
let lengthAfterUnshift = carsOwned.unshift("Baleno");
console.log(carsOwned, lengthAfterPush);

//REMOVING ELEMENTS
//pop()----------removes elements at end of array and returns the element
const RemovedAfterPop = carsOwned.pop();
console.log(carsOwned, RemovedAfterPop);

//shift()------removes element at beginning of the array
const RemovedAfterShift = carsOwned.shift();
console.log(carsOwned, RemovedAfterShift);

//Check elements in array
//includes()
console.log(carsOwned.includes("lamborghini"));

//check indexof elements
//indexof()
console.log(carsOwned.indexOf("porsche"));

//----------------------------------------

//Object :

const Employee = {
  firstName: "Pavan",
  lastName: "Kumar",
  hisFriends: ["naveen", "shashi", "mequirel"],
};

//2 ways to access
//1.brackets
console.log(Employee["firstName"]);
//2.by dot
console.log(Employee.lastName);

//to add property to object
Employee.location = "belgium";
Employee["job"] = "software engineer";

console.log(Employee);

//challenge
console.log(`${Employee.firstName} has ${Employee.hisFriends.length} friends, 
and his bestfriends were ${Employee.hisFriends[2]}`);

//------------
//OBJECT METHODS

const student = {
  firstName: "sara",
  lastName: "rugved",
  scores: [45, 56, 80],
  hasDriversLicence: false,
  yearOfBirth: 1999,

  // calcAge : function(yearOfBirth)
  // {
  //     return 2023-this.yearOfBirth;
  // }

  calcAge: function () // object method
  {
    this.age = 2023 - this.yearOfBirth; //this refers to student object
    return age;
  },
  getSummary: function () {
    return `${this.firstName} , a ${this.calcAge()} years old, has ${
      this.hasDriversLicence ? "a" : "no"
    } driving licence!`;
  },
};

console.log(student.calcAge());
console.log(student);

console.log(student.getSummary());

//-----------------
//CONTROL STRUCTURES
//FOR LOOP:

for (let num = 1; num <= 10; num++) {
  console.log(`RCB lifted cup for ${num}th time!!!`);
}

// CREATE ARRAY WITH LOOP
const details = ["pavan", "henry", 23, true, "Harry", 2000];
const detailsCopy = [];

//push elements from one array to another
for (let i = 0; i < details.length; i++) {
  detailsCopy.push(details[i]);
}

console.log(detailsCopy);

//-------------------
// Continue keyword
console.log("---------after continue--------");
for (let i = 0; i < details.length; i++) {
  if (typeof details[i] != "string")
    // can use !== also
    continue;
  console.log(details[i], typeof details[i]);
}

//break keyword
console.log("---------after break--------");
for (let i = 0; i < details.length; i++) {
  if (typeof details[i] == "number") break;
  console.log(details[i], typeof details[i]);
}

//--------------
//loop inside another loop

for (let i = 1; i <= 3; i++) {
  console.log(`starting exercise ${i}`);

  // for(let ex=1;ex<=3;ex++)
  // {
  //     console.log(`weight lifted for ${ex}th time!!`);
  // }
}

//---------------------
//while loop
//when we dont have counter variable or we dont know how many iterations to loop through
let dice = 0;
while (dice != 6) {
  console.log(`you rolled ${dice}!`);
  //debugger;
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice == 6) {
    console.log(`congrats...you rolled ${dice}`);
  }
}

//--------------------

//user snippet file in preferences to setup shortcuts
//prettier-code formatter installed
//default formtter as prettier in settings
//check the format to save

//install live server or
//install node.js and  in terminal
// npm install live-server -g
//  node.js package manager    -globally

//console methods
console.log("hello");
//console.warn("i am warning you!!!");
//console.error("look out...its an error in your code!!!");

//-----DEBUGGING:----------
//in console u can check
//in chrome--sources near console
//or put debugger; statement in code

//CHALLENGE
// const printForcast = function (arr) {
// //console.log(`...${arr[0]}C in 1 days ...${arr[0]}C in 2 days ...${arr[2]}C in 3 days...`);
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`...${arr[i]}C in ${i + 1} days `);
//   }
// };

// const test = [17, 21, 23];
// printForcast(test);

const printForcast = function (arr) {
  let str = "";
  for (let num = 0; num < arr.length; num++) {
    str += `${arr[num]}C in ${num + 1} days ...`;
  }
  console.log("..." + str);
};

const test2 = [12, 5, -5, 0, 4];
printForcast(test2);
