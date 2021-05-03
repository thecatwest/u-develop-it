// import mysql2
const mysql = require("mysql2");

// import express
const express = require("express");

// add PORT designation and app expression
const PORT = process.env.PORT || 3001;
const app = express();

// add express.js middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect application to MySQL database
const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username,
    user: "root",
    // Your MySQL password
    password: "poop",
    database: "election",
  },
  console.log("Connected to the election database.")
);

// test the connection with GET test route
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

// query the db to test the connection
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(err);
//     console.log(rows);
// });

// GET a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// DELETE a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
    VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});

// add route to handle user requests that aren't supported by app
// this will override GET routes - make sure it's last of app.uses
app.use((req, res) => {
  res.status(404).end();
});

// add function that will start express.js server on port 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
