const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoute');
require('dotenv').config();

const { API_PORT } = process.env;
const app = express();

app.use(bodyParser.json());
app.use('/users', userRoute);

app.listen(API_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express server listening on port ${API_PORT}`);
});
