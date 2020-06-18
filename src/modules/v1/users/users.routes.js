const HttpStatus = require('http-status-codes');
const express = require('express');
const router = express.Router();
const usersMiddleware = require('./users.middleware');


const route = ({db}) => {
  const userController = require('./users.controller')({db});

  router.post('/users/validade', [
    usersMiddleware.verifyUser,
    async (req, res) => {
      try {
        const user = await userController.validate(req);
        res.status(HttpStatus.CREATED).send(user);
      } catch (err) {
        let code = err.code || HttpStatus.INTERNAL_SERVER_ERROR;
        res.status(code).send({message: err.message});
      }
    }]);

  return router;
};

module.exports = route;
