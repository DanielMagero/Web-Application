/* 
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
let score = 55;

if (score >= 70) {
  console.log("Eligible for Admission.");
} else if (score >= 50) {
  console.log("Admission on Probation.");
} else {
  console.log("Not Eligible for Admission.");
}


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
let number = -3;
if (number >= 0) {
  if (number === 0) {
    console.log("The number is zero.");
  } else {
    console.log("The number is positive.");
  }
} else {
  console.log("The number is negative.");
}
*/

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
