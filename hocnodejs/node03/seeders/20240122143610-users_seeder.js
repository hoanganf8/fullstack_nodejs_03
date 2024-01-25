"use strict";

/** @type {import('sequelize-cli').Migration} */
const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");
module.exports = {
  async up(queryInterface, Sequelize) {
    const salt = bcrypt.genSaltSync(10);
    const users = [
      {
        fullname: "Hoàng An F8",
        email: "hoangan.web@gmail.com",
        status: true,
        password: bcrypt.hashSync("123456", salt),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    // for (let i = 0; i < 50; i++) {
    //   users.push({
    //     fullname: faker.person.fullName(),
    //     email: faker.internet.email(),
    //     status: faker.datatype.boolean(),
    //     created_at: faker.date.past(),
    //     updated_at: faker.date.past(),
    //     address: faker.location.streetAddress(),
    //   });
    // }
    await queryInterface.bulkInsert("users", users);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users");
  },
};
