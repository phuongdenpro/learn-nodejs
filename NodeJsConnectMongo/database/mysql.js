const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost:3306",
    user: "root",
    password: "0961869274",
    database: "testdb"
  });

  module.exports = connection;