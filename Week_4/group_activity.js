/*GROUP C

GASANA MARK - J22B13/045 - PROJECT MANAGER
KAIZZI ELIJAH - M24B38/023 - TEAM SECRETARY
MUGULO DANIEL MAGERO - M24B38/017 - TEAM DEVELOPER LEAD
SSUUBI STEVEN - M24B13/007 - TEAM PRESENTER
*/

//Initialize the number of users
let number_of_users = 70;

//If statement to communicate the network overload
if (number_of_users > 100) {
  console.log("Network is overloaded!!");
}

//initilize the joining or leaving variables
let joining = 10;
let leaving = 10;

let current_users = number_of_users;

//the while loop to simulate users joining
while (current_users < 200) {
  if (current_users < 100) {
    console.log("Network is stable.");
  } else {
    console.log("Network is unstable");
  }
  current_users = current_users + joining;
}

//while loop to simulate users leaving
current_users = 200;
while (current_users > 0) {
  if (current_users < 100) {
    console.log("Network is stable.");
  } else {
    console.log("Network is unstable");
  }
  current_users = current_users - joining;
}
