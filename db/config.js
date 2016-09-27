var Sequelize = require('sequelize');

//AWS DB CONNECTION
var connectionString = process.env.CONNECTION_STRING;

var connection = new Sequelize(connectionString, {
  pool: {
    max: 50,
    min: 1,
    idle: 1000000
  },
});

// LOCAL DB CONNECTION
// 1. Run mysqld in terminal tab 1
// 2. Run mysql in terminal tab 2
// 3. In terminal tab 2, use command: create database eels1;
// 4. In terminal tab 2, use command: USE eels1;
// var connection = new Sequelize('eels1', 'root');
 
module.exports = connection;

