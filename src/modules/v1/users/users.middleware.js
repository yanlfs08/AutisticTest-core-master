const validateJsonSchema = require('jsonschema').validate;
const HttpStatus = require('http-status-codes');

const userSchema = {
  "type": "object",
  "properties": {
    "name": {"type": "string"},
    "email": {"type": "string"},
    "data": {"type": "object"}
  },
  "required": [
    "name",
    "email",
    "data"
  ],
  "additionalProperties": false
};

exports.verifyUser = (req, res, next) => {
  req.body = req.body || {};
  let result = validateJsonSchema(req.body, userSchema);
  if (result.valid) {
    next();
  } else {
    let message = [];
    for (let err of result.errors) {
      message.push(err.message);
    }
    res.send(HttpStatus.BAD_REQUEST, {error: message.join(', ')});
  }
};
