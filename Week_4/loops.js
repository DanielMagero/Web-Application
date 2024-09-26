/*
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

for (let num = 1; num <= 12; num++) {
  console.log(num, "X 5 = ", num * 5);
  console.log(`${num} X 5 = ${num * 5}`);
}

""
''
``

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
*/
//allowing prompt in the terminal
//npm install prompt-sync
const prompt = require("prompt-sync")({ sigint: true });
let answer = 0;
while (answer !== "yes") {
  answer = prompt("Do you want to continue? (yes/no)");
}
