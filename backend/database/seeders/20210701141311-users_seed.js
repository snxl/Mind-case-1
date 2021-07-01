'use strict';

const bcrypt = require("bcryptjs")
const moment = require("moment")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
        email: "nicolas.soares.gomes@gmail.com",
        name: 'Nicolas Soares Gomes',
        password: await bcrypt.hash("Nicolas130102", 12),
        credential: 2,
        acess: 2,
        createdAt: moment().format("YYYY-MM-DD HH:MM"),
        updatedAt: moment().format("YYYY-MM-DD HH:MM")
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
      
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
