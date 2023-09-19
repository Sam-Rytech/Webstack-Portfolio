const { DataTypes } = require('sequelize');
const { beedPriceUnits } = require('../../config');

const BeedModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  priceUnit: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: beedPriceUnits.DOLLAR,
  },
};

module.exports = {
  initialise: (sequelize) => {
    this.model = sequelize.define('beed', BeedModel)
  },

  createBeed: (user) => {
    return this.model.create(user);
  },

  findBeed: (query) => {
    return this.model.findOne({
      where: query,
    });
  },

  updateBeed: (query, updatedValue) => {
    return this.model.update(updatedValue, {
      where: query,
    });
  },

  findAllBeeds: (query) => {
    return this.model.findAll({
      where: query
    });
  },

  deleteBeed: (query) => {
    return this.model.destroy({
      where: query
    });
  }
}
