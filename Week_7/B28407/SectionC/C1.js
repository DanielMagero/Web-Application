//initialize variables to store the prices of the three products
var product1 = 34000;
var product2 = 56000;
var product3 = 18000;

//Store the total amount
var total_purchase = product1 + product2 + product3;

if (total_purchase > 100000) {
  console.log("You qualify for a discount!");
} else {
  console.log("The discount does not apply.");
}
