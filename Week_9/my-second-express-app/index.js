const express = require("express");
const myBusinessLogic = require("./service/my_business_logic");

const app = express();
const port = 5000;
app.use(express.json());

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

app.get("/list-of-friends/:friendid", (request, response) => {
  console.log("The value is: ", request.params.friendid);
  for (let i = 0; i < 5; i++) {
    if (request.params.friendid == friends[i].id) {
      return response.send(friends[i]);
    }
    console.log(friends[[i]]);
  }
  return response.send("Not found");
});

//Using the models and services
app.get("/class-list", (request, response) => {
  return response.send(myBusinessLogic.getStudents());
});

app.get("/class-list-id/:studentId", (request, response) => {
  //console.log("Loging request params", request.params);
  //console.log("Use the value from front-end", request.params.id);

  return response.status(200).send(myBusinessLogic.getStudentsById(request));
});

//post
app.post("/signup", (request, response) => {
  console.log("Loging request body", request.body);
  return response.status(200).send("Hey, we are using post");
});

//delete
app.delete("/deletestudent", (request, response) => {
  console.log("Loging request body for delete", request.body);
  return response.status(200).send("Hey, we are using post for delete");
});

//patch
app.patch("/patch-students", (request, response) => {
  console.log("Loging request body for patch", request.body);
  return response.status(200).send("Hey, we are using post for patch");
});

//put
app.put("/put-student", (request, response) => {
  console.log("Loging request body for put", request.body);
  return response.status(200).send("Hey, we are using post for put");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
