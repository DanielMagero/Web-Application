//Challenge 1: Zara's Vault of Variables
var queenName = "Star";

var completedChallenges = 0;
completedChallenges = completedChallenges + 1;
console.log(completedChallenges);

//Challenge 2: Amina's Amazing Functions
function celebrateWin() {
    console.log("You did it, Queen!");
}

celebrateWin;

function celebrateWin(challengeName) {
    console.log(`Challenge: ${challengeName} completed.`);
}

var challengeName = 5;
celebrateWin(challengeName);

//Challenge 3: Lina's Legendary Loops
for (let i = 1; i <= 3; i++) {
    console.log(`Challenge ${i} solved!`);
}

for (let i = 1; i <= 3; i++) {
    console.log(`The Tech Queens have solved Challenge ${i}!`);
}

//Challenge 4: The Conditional Path of Wisdom
var nextChallenge = "loops";
if (nextChallenge === "loops") {
    console.log("Time to practice loops!");
} else {
    console.log("On to the next challenge!");
}

nextChallenge = "functons";

if (nextChallenge === "loops") {
    console.log("Time to practice loops!");
}
if (nextChallenge === "functions") {
    console.log("Time to master functions!");
} else {
    console.log("On to the next challenge!");
}

//Bonus Challenge: The Queen's Secret Challenge

function revealMessage(string) {
    if (string.length > 0) {
        return string[0];
    } else {
        return null;
    }
}

console.log(revealMessage("Queens"));
