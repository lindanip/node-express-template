const mysql = require('mysql');

const connection = mysql.createConnection({
    host        : process.env.DB_HOST,
    user        : process.env.DB_USER,
    password    : process.env.DB_PASSWORD
});

var sql = 'CREATE DATABASE IF NOT EXISTS template';
connection.query(sql, err => {
    if (err)
      console.log(err);
    
    console.log('database template created..');
});

connection.end();