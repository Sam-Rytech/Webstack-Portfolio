const router = require('express').Router();

// Controller Imports
const BeedController = require('./controllers/BeedController');

// Middleware Imports
const isAuthenticatedMiddleware = require('./../common/middlewares/IsAuthenticatedMiddleware');
const SchemaValidationMiddleware = require('../common/middlewares/SchemaValidationMiddleware');
const CheckPermissionMiddleware = require('../common/middlewares/CheckPermissionMiddleware');

// JSON Schema Imports for payload verification
const createBeedPayload = require('./schemas/createBeedPayload');
const updateBeedPayload = require('./schemas/updateBeedPayload');
const { roles } = require('../config');

router.get(
  '/',
  [isAuthenticatedMiddleware.check],
  BeedController.getAllBeeds
);

router.get(
  '/:beedId',
  [isAuthenticatedMiddleware.check],
  BeedController.getBeedById
);

router.post(
  '/',
  [
    isAuthenticatedMiddleware.check,
    CheckPermissionMiddleware.has(roles.ADMIN),
    SchemaValidationMiddleware.verify(createBeedPayload),
  ],
  BeedController.createBeed
);

router.patch(
  '/:beedId',
  [
    isAuthenticatedMiddleware.check,
    CheckPermissionMiddleware.has(roles.ADMIN),
    SchemaValidationMiddleware.verify(updateBeedPayload),
  ],
  BeedController.updateBeed
);

router.delete(
  '/:beedId',
  [isAuthenticatedMiddleware.check, CheckPermissionMiddleware.has(roles.ADMIN)],
  BeedController.deleteBeed
);

module.exports = router;
