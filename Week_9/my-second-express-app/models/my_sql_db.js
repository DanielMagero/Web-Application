const mysql = require("mysql");

const connection = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "daniel",
  database: "try_me",
});

connection.connect();

connection.query("select", (error, rows, fields) => {
  if (error) {
    console.log("An error has occurred while connecting to database");
    throw error;
  }
  console.log("Solution", rows[0].solution);
});

connection.end();
