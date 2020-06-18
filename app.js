const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const db = require('./models');

const userRouter = require('./src/modules/v1/users/users.routes')({db});

app.use(cors());
app.use(bodyParser());

app.use('/api/v1', userRouter);

app.get('/', (req, res) => {
  res.status(200).send();
});

module.exports = app;

