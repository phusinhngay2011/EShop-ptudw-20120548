'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {
        "name": "Dark-winged trumpeter"
      }, {
        "name": "Eagle, long-crested hawk"
      }, {
        "name": "Cuis"
      }, {
        "name": "Black-throated butcher bird"
      }, {
        "name": "American badger"
      }, {
        "name": "Grenadier, common"
      }, {
        "name": "Alligator, american"
      }, {
        "name": "African polecat"
      }, {
        "name": "Gila monster"
      }, {
        "name": "Warthog"
      }, {
        "name": "Striped hyena"
      }, {
        "name": "Heron, boat-billed"
      }, {
        "name": "Creeper, black-tailed tree"
      }, {
        "name": "Anteater, giant"
      }, {
        "name": "Indian mynah"
      }, {
        "name": "Dove, rock"
      }, {
        "name": "White-browed owl"
      }, {
        "name": "Marshbird, brown and yellow"
      }, {
        "name": "Common boubou shrike"
      }, {
        "name": "Royal tern"
      }
    ];
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    });
    await queryInterface.bulkInsert('Tags', items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});
  }
};
