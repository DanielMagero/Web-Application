//store the income
var income = 40000;

//create the function
function calculateTax(income) {
  //The tax rate is 15%
  console.log(
    "The tax payable on your income of",
    income,
    "nairas, is ",
    0.15 * income,
    "nairas."
  );
}

//call the function

calculateTax(income);
