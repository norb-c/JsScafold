'use strict';
const Sequelize = require('sequelize');
const db = require('../config/db');

/*
	@params
	user
*/
const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  }
});
module.exports = User;
