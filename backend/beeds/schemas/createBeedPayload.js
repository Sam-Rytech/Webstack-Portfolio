const { beedPriceUnits } = require('../../config');

module.exports = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    image: {
      type: 'string',
    },
    price: {
      type: 'number',
    },
    priceUnit: {
      type: 'string',
      enum: Object.values(beedPriceUnits),
    },
  },
  required: ['title', 'description', 'image', 'price'],
  additionalProperties: false,
};
