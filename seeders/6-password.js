'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const models = require('../models');
        const bcrypt= require('bcrypt')
        // update hash password
        let users = await models.User.findAll()
        let updatedUser = []
        users.forEach(user => {
            updatedUser.push({
                id: user.id,
                password: bcrypt.hashSync("Phu@2011", 8)
            })
        }); 
        await models.User.bulkCreate(updatedUser, {
            updateOnDuplicate: ['password']
        })
    },

    async down(queryInterface, Sequelize) {

    }
};
