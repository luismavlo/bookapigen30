'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('autors', 'birtnacimiento', 'birthdate')
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('autors', 'birthdate', 'birtnacimiento')
  }
};
