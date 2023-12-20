'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('autors', 'surname', {
      type: Sequelize.STRING,
      allowNull: false
    })

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('autors', 'surname', {
      type: Sequelize.TEXT,
      allowNull: false
    })
  }
};
