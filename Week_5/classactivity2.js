// Function that accepts the selling price, cost,
//price and the number of units sold and returns the profit
//for a small business selling maize

function calculateProfit(cost_price, selling_price, num_of_units) {
  return cost_price - selling_price * num_of_units;
}

var Profit = calculateProfit(200000, 5000, 30);

console.log("The profit got from the maize is: UGX", Profit);
