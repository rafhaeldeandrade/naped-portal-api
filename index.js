const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoute');
const categoryRoute = require('./routes/categoryRoute');
const blogpostRoute = require('./routes/blogpostRoute');
const defaultErrorHandler = require('./middlewares/defaultError');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use('/users', userRoute);
app.use('/categories', categoryRoute);
app.use('/blogposts', blogpostRoute);

app.use(defaultErrorHandler);

const { API_PORT } = process.env;
app.listen(API_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express server listening on port ${API_PORT}`);
});
