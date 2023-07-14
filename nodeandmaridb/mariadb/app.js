const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "test",
  password: "12345",
  database: "node",
});

connection.connect();

connection.query("select * from user", (error, result, fields) => {
  if (error) throw error;
  console.log("The solution is:", result);
});

connection.end();
