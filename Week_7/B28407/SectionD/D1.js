//tell the client about the options
console.log(
  "Check out your network rates! \n For MTN, enter 1. \n For Airtel, enter 2. \n For Africell. enter 3."
);

//store the network code
var network = 3;

//check what conditions it fulfills
switch (network) {
  case 1:
    console.log("Your network is MTN. Your call rate is 1 UGX/second.");
    break;
  case 2:
    console.log("Your network is Airtel. Your call rate is 0.98 UGX/second.");
    break;
  case 3:
    console.log("Your network is Africell. Your call rate is 1.2 UGX/second");
    break;
}
