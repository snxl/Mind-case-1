'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('users', {
        id: {
            type : Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        credential: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        acess: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        createdAt:{
            type: Sequelize.DATE,
            allowNull:false
        },
        updatedAt:{
            type: Sequelize.DATE,
            allowNull:false
        }
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('users');

  }
};
