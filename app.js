const express = require('express');
const User = require('./models/user');
const db = require('./config/db');
const app = express();

app.get('/', async (req, res) => {
  const c = await User.findAll();
});



db.sync({ force: true }).then(function() {
  app.listen(80, () => {
    console.log(`App is running on port ${80}`);
  });
});
