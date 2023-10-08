const { roles } = require('../../config');

module.exports = {
  type: 'object',
  properties: {
    username: {
      type: 'string'
    },
    email: {
      type: 'string',
      pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
    },
    password: {
      type: 'string'
    },
    age: {
      type: 'number'
    },
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    role: {
      type: 'string',
      enum: Object.values(roles)
    },
    phoneNumber: {
      type: 'string'
    }
  },
  required: [
    'username',
    'email',
    'password',
    'phoneNumber',
    'firstName',
    'lastName',
    'age'
  ],
  additionalProperties: false
};
