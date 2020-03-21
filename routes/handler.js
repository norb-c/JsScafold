'use strict';

const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { createUser } = require('../controller/handler');

router.get('/login', createUser);

module.exports = {
  baseUrl: '/',
  router
};
