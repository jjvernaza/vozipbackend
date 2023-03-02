'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cedula: {
        type: Sequelize.STRING
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      correo_electronico: {
        type: Sequelize.STRING
      },
      fecha_instalacion: {
        type: Sequelize.DATE
      },
      ip_adress: {
        type: Sequelize.STRING
      },
      celular: {
        type: Sequelize.STRING
      },
      id_plan: {
        type: Sequelize.INTEGER
      },
      act_usua: {
        type: Sequelize.STRING
      },
      act_hora: {
        type: Sequelize.DATE
      },
      act_esta: {
        type: Sequelize.CHAR
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('clientes');
  }
};