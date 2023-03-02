'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class planes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  planes.init({
    nombre_plan: DataTypes.STRING,
    megas: DataTypes.INTEGER,
    precio: DataTypes.FLOAT,
    act_usua: DataTypes.STRING,
    act_hora: DataTypes.DATE,
    act_esta: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'planes',
  });
  return planes;
};