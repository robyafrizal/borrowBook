"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("members", [
      {
        code: "M001",
        name: "Angga",
        book: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        code: "M002",
        name: "Ferry",
        book: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        code: "M003",
        name: "Putri",
        book: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("members", null, {});
  },
};
