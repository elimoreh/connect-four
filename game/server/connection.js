const mysql = require('mysql');

const connection =  mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "scoreboard_data"
  });

  connection.connect();

  module.exports = connection;