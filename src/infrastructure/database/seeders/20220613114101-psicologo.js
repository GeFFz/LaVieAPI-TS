'use strict';

const {
  faker
} = require('@faker-js/faker');

let seed = []
for(let i=0; i<20; i++){
  seed.push(
    {
      name:faker.name.findName(),
      email:faker.internet.email(),
      apresentacao: 'bla bla bla',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  )
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('psicologos', seed)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};