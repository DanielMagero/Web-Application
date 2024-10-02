//Revsing our knowledge on functions
//Block of code that handles a particular task and can be reused

//Life before functions
var num = 23;
var num_two = 2;

var sum = num + num_two;
console.log("Sum: ", sum);

var num_three = 40;
var num_four = 4;

var sum_two = num_three + num_four;

console.log("Sum two: ", sum_two);

//Functions without parameters or arguemnts
//Void functions
function summation() {
  var num_five = 40;
  var num_six = 4;

  var sum_three = num_five + num_six;
  console.log("Sum three: ", sum_three);
}

summation();

//Returning functions
function summation_two() {
  var num_five = 40;
  var num_six = 4;

  var sum_four = num_five + num_six;
  return sum_four;
}

// Use it to by printing the value directly on the terminal
console.log("Sum four: ", summation_two());

// Assigning the value to a variable

var sum_four = summation_two();
console.log(sum_four);

var sum_five = summation();
console.log(sum_five);

// Void Functions with Parameters
function summation_three(num_five, num_six) {
  var sum_six = num_five + num_six;
  console.log("The sum of ", num_five, "and ", num_six, "is ", sum_six);
}

summation_three(40, 4);
summation_three(100, 2);
summation_three(10000, 25);

// Returning Functions with Parameters
function summation_four(num_five, num_six) {
  return num_five + num_six;
}

//Printing dierctly
console.log("Sum seven: ", summation_four(23, 51));

// Assigningn it to a variable
var sum_seven = summation_four(234, 67);
