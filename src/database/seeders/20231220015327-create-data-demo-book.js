'use strict';

const moment = require("moment/moment");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books', [
      {
        title: 'cualquier cosa',
        synopsis: 'cualquier cosa',
        genre: 'cualquier cosa',
        author_id: 1,
        createdAt: moment().format('YYYY-MM-DD'),
        updatedAt: moment().format('YYYY-MM-DD'),
      },{
        title: 'cualquier cosa 2',
        synopsis: 'cualquier cosa 2',
        genre: 'cualquier cosa 2',
        author_id: 1,
        createdAt: moment().format('YYYY-MM-DD'),
        updatedAt: moment().format('YYYY-MM-DD'),
      },
      {
        title: 'cualquier cosa 3',
        synopsis: 'cualquier cosa 3',
        genre: 'cualquier cosa 3',
        author_id: 2,
        createdAt: moment().format('YYYY-MM-DD'),
        updatedAt: moment().format('YYYY-MM-DD'),
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('books', null, {})
  }
};
