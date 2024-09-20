//Case 1: The Case of The Mysterious Variables
var detectiveName = "Daniel";

var solvedCases = 0;

solvedCases = solvedCases + 1;

//Case 2: The Case of The Lost Function
function solveMystery(clue) {
  console.log("Mystery Solved!");
  if ((clue = "obvious")) {
    console.log("This was an easy case!");
  } else {
    console.log("This one was tricky!");
  }
}

solveMystery;

//Case 3: The Case of the Endless Loop
for (let i = 1; i <= 5; i++) {
  console.log("Detective on the case...");
}

for (let i = 1; i <= 5; i++) {
  console.log("Case ${i} solved!");
}
