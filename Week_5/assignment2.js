function arithmetic_function(type, num1, num2) {
  if (type === 1) {
    var sum = num1 + num2;
    console.log("The sum of the two numbers is", sum);
  } else if (type === 2) {
    var difference = num1 - num2;
    console.log("The difference of the two numbers is: ", difference);
  } else if (type === 3) {
    var quotient = num1 / num2;
    console.log("The quotient of the two numbers is: ", quotient);
  } else {
    var product = num1 * num2;
    console.log("The product of the two numbers is: ", product);
  }
}

console.log(
  "The options are \n 1 - addition \n 2 - subtraction \n 3 - quotient \n 4 - product."
);

arithmetic_function(1, 12, 32);
arithmetic_function(2, 12, 32);
arithmetic_function(3, 12, 32);
arithmetic_function(4, 12, 32);
