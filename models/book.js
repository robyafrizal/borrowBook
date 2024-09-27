"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init(
    {
      code: DataTypes.STRING,
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      stock: DataTypes.INTEGER,
      borrow_date: DataTypes.DATE,
      due_date: DataTypes.DATE,
      borrowed_by: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Book",
      underscored: true,
    }
  );
  return Book;
};
