let mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root57',
  port: '3306',
  database: 'test'
});


module.exports = connection;
