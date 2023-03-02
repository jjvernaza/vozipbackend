'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  clientes.init({
    cedula: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    direccion: DataTypes.STRING,
    correo_electronico: DataTypes.STRING,
    fecha_instalacion: DataTypes.DATE,
    ip_adress: DataTypes.STRING,
    celular: DataTypes.STRING,
    id_plan: DataTypes.INTEGER,
    act_usua: DataTypes.STRING,
    act_hora: DataTypes.DATE,
    act_esta: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'clientes',
  });
  return clientes;
};