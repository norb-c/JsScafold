const User = require('../models/user');

exports.createUser = async () => {
  const user = await User.findAll();
};
