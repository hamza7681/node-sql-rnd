"use strict";

const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database/config");

class users extends Model {}

users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "users",
    tableName: "users",
  }
);

/**
 * Sequelize sync creates table schema in the database
 * You can either choose to run Migrations manually or use automatic sync
 * Using both will cause an error
 */
let dataBaseSync = async () => {
  try {
    await users.sync({ alter: true, force: false });
    process.exit(0); // exit code 0 is normal
  } catch (err) {
    // this will show the error
    console.log("There was an error at users model sync!  ", err.message);
  }
};

// dataBaseSync();
module.exports = users;

// module.exports = function (sequelize, DataTypes) {
//   return sequelize.define("User", {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       unique: true,
//       allowNull: false,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   })
// };
