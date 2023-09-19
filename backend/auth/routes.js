const router = require('express').Router();

// Controller Imports
const AuthController = require('./controllers/AuthController');

// Middleware Imports
const SchemaValidationMiddleware = require('../common/middlewares/SchemaValidationMiddleware');

// JSON Schema Imports for payload verification
const registerPayload = require('./schemas/registerPayload');
const loginPayload = require('./schemas/loginPayload');

router.post(
  '/signup',
  [SchemaValidationMiddleware.verify(registerPayload)],
  AuthController.register
);

router.post(
  '/login',
  [SchemaValidationMiddleware.verify(loginPayload)],
  AuthController.login
);

module.exports = router;
