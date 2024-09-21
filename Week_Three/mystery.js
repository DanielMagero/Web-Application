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
solveMystery("obvious");
solveMystery("not obvious");

//Case 3: The Case of the Endless Loop
for (let i = 1; i <= 5; i++) {
  console.log("Detective on the case...");
}

for (let i = 1; i <= 5; i++) {
  console.log("Case ${i} solved!");
}

//Case 4: The Case of the Conditional Clue

var suspectName = "Mr.Green";
if (suspectName === "Ms.Scarlet") {
  console.log("Ms.Scarlet is the suspect!");
}
if (suspectName === "Mr.Green") {
  console.log("Mr.Green is suspicious");
} else {
  ("Keep looking...");
}

//Bonus case
function findClue(string) {
  if (string.length > 0) {
    return string[0];
  } else {
    return null;
  }
}

console.log(findClue("kindred"));
