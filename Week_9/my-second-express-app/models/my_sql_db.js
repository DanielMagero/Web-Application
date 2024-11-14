const mysql = require("mysql");

const connection = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "daniel",
  database: "try_me",
});

connection.connect((error) => {
  if (error) {
    console.log("An error has occurred while connecting to database");
    throw error;
  }
});
