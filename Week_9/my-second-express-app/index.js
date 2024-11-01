const express = require("express");
const app = express();
const port = 5000;

//GET
//this helps create endpoints that receive requests
app.get("/greetings", (request, response) => {
  return response.send({ msg: "Hello Daniel!" });
});

//List of friends
let friends = [
  { id: 1, name: "Tracy" },
  { id: 2, name: "Humble" },
  { id: 3, name: "Esther" },
  { id: 4, name: "Justin" },
  { id: 5, name: "Anitah" },
];
app.get("/list-of-friends", (request, response) => {
  return response.send(friends);
});

let students = [
  { id: 1, AccessNo: "B24536", StudentName: "Tracy" },
  { id: 2, AccessNo: "B24536", StudentName: "Anitah" },
  { id: 3, AccessNo: "B28490", StudentName: "Joy" },
  { id: 4, AccessNo: "B24536", StudentName: "Esther" },
  { id: 5, AccessNo: "B24536", StudentName: "Justin" },
  { id: 6, AccessNo: "B24536", StudentName: "Cynthia" },
  { id: 7, AccessNo: "B24536", StudentName: "Elijah" },
  { id: 8, AccessNo: "B24536", StudentName: "Humble" },
  { id: 9, AccessNo: "B24536", StudentName: "Emmanuel" },
  { id: 10, AccessNo: "B24536", StudentName: "Cathy" },
];

app.get("/class-list", (request, response) => {
  return response.send(students);
});

app.get("/class-list-id/:id", (request, response) => {
  console.log("Loging request params", request.params);
  console.log("Use the value from front-end", request.params.id);
  for (i = 0; i < 10; i++) {
    if (request.params.id == students[i].id) {
      return response.status(200).send(students[i]);
    }
    console.log(students[[i]]);
  }
  return response.status(400).send("Found Nothing");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
