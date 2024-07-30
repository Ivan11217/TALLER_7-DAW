const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const sequelize = require('./config/config');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', routes);

sequelize.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
    });
  });
