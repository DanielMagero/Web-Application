//Question 3
//If statements in js have if, else if, and else
//if - used to state the first condition
//else if is used to state other conditions to be considered
//else is used to cater for anything that is outside the stated conditions
//condition - it is placed in brackets after the function name
//action - it is okaced in curly brackets
// if (condition) {action}

//purpose of an if statement
//assess variables against particular conditions
//making decisions based on conditions

let temperature = 30;
if (temperature > 25) {
  console.log("It's hot!");
} else {
  console.log("It's cold!");
}

//It displays "It's hot" since the value of temperature is greater than 25

//modifying the function to print a message for temperature between 15 and 25
let temperature1 = 30;
if (temperature1 > 25) {
  console.log("It's hot!");
} else if (temperature >= 15 && temperature < 25) {
  console.log("It's warm.");
} else {
  console.log("It's cold!");
}

//add an else if statement to accomodate the range for temperature
