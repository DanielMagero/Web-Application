let age = 18;
if (age >= 18) {
  if (age < 65) {
    console.log("You are eligible to work.");
  } else {
    console.log("You are at retirement age.");
  }
} else {
  console.log("You are too young to work.");
}

//Rewrite in a single if-else
if (age > 65) {
  console.log("You are at retirement age.");
} else if (age >= 18 && age < 65) {
  console.log("You are eligible for work");
} else {
  console.log("You are too young to work.");
}
