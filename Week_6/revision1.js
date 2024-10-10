//Number 1
//Difference between var, let and const

//var is the way of initiating a variable that can be reassigned later
//let is used to intitialize a varibale that can be reassigned later
//const is used to initiate variables whose value is to be the same all through the code

//WHat happens when you try to reassign values to variables declared with let or const?
//An error happens when you try to reassign a variable with const but accepts when you try to
//reassign a variable initialized with let

//Output of the code

var x = 10;
let y = 5;
const z = 3;

x = 20;
y = 15;
//z = 7;

console.log(x, y, z);

//The code shows an error because we are trying to reassign the constant z
