//import thr list of students
const myDB = require("../models/my_db");

//function getting all students
const getStudents = () => {
  console.log(myDB);
  return myDB;
};

//this function is getting the student name by ID
const getStudentsById = (request) => {
  for (i = 0; i < 10; i++) {
    if (request.params.studentId == myDB[i].id) {
      return myDB[i];
    }
    console.log(myDB[i]);
  }
  return "FOUND NOTHING";
};

module.exports = { getStudents, getStudentsById };
