"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      //Khai báo các cột trong table
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    },
    {
      //Options
      sequelize,
      modelName: "User",
      tableName: "users", //Tên table trong Database
      //Mặc định sequelize sẽ tự động khai báo trường createdAt và updatedAt
      //Nếu muốn vô hiệu hóa 2 trường này, khai báo timestamps: false
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  );
  return User;
};
