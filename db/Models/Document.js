var Sequelize = require('sequelize');
var sqlConnection = require('../config.js');

var Document = Sequelize.define('document', 
  {  }
);

Document.sync();
module.exports = Document;