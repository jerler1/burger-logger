// Dependencies
// =========================================
const mysql = require("mysql");

// Connections
// =========================================
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "kitty1",
    database: "burgers_db",
  });
};

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exporting connection so that the ORM file can access the database.
module.exports = connection;
