const mysql = require("mysql");

// create connection
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  port: "3306", // default port
  database: "myblog",
});

// start connection
con.connect();

// execute sql
const sql = "select * from users";
con.query(sql, (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(result);
});

// close connection
con.end();
