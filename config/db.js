const { Sequelize } = require('sequelize');
module.exports = new Sequelize(
  'mysql://lender:Su94LtyGwDx2aV7c@staging.cyock39x6hx4.us-east-2.rds.amazonaws.com:3306/baines_db?reconnect=true',
  { dialect: 'mysql' }
);
