/*GROUP C

GASANA MARK - J22B13/045 - PROJECT MANAGER
KAIZZI ELIJAH - M24B38/023 - TEAM SECRETARY
MUGULO DANIEL MAGERO - M24B38/017 - TEAM DEVELOPER LEAD
SSUUBI STEVEN - M24B13/007 - TEAM PRESENTER
*/

//If Statements

//Examples
if (a === 1) {
  console.log(1);
} else {
  console.log(2);
}

let number = 5;

if (number > 0) {
  console.log("The number is positive.");
}

//if-else
let number1 = 8;

if (number1 % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

let score = 55;

if (score >= 80) {
  console.log("You got an A.");
} else if (score >= 60) {
  console.log("You got a B.");
} else {
  console.log("You need to improve.");
}

//Exercise 1
let temperature = 25;

if (temperature > 30) {
  console.log("It is too hot!");
} else if (temperature >= 20) {
  console.log("It's moderate.");
} else {
  console.log("It's cold.");
}

//Exercise 2
let score2 = 55;

if (score2 >= 70) {
  console.log("Eligible for Admission.");
} else if (score2 >= 50) {
  console.log("Admission on Probation.");
} else {
  console.log("Not Eligible for Admission.");
}

//Exercise 3
let waterAvailable = 300;

if (waterAvailable > 500) {
  console.log("Enough Water.");
} else if (waterAvailable >= 200) {
  console.log("Water is limited.");
} else {
  console.log("Water shortage.");
}

//Part 3
//Nested Loops
let number3 = -3;
if (number3 >= 0) {
  if (number3 === 0) {
    console.log("The number is zero.");
  } else {
    console.log("The number is positive.");
  }
} else {
  console.log("The number is negative.");
}

//Exercise 4
let expired = false;
let quality = 7;

if (expired === true) {
  console.log("Do not use!");
} else {
  if (quality > 8) {
    console.log("Good quality.");
  } else if (quality >= 5) {
    console.log("Average quality.");
  } else {
    console.log("Poor quality");
  }
}

//LOOPS

//Examples
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//Exercise 1
for (let number = 1; number <= 10; number++) {
  console.log(`The number is ${number}`);
}

//Exercise 2
for (let num = 1; num <= 12; num++) {
  console.log(num, "X 5 = ", num * 5);
  console.log(`${num} X 5 = ${num * 5}`);
}

//Need to differentiate when conactinating in js
//""
//""
//``

//Exercise 3
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

//Exercise 4
let answer = 0;
while (answer !== "yes") {
  answer = prompt("Do you want to continue? (yes/no)");
}
