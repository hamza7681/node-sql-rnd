// require("dotenv").config();
const { Sequelize } = require("sequelize");
// const databaseName = process.env.DATABASE_NAME;
// const username = process.env.DATABASE_USERNAME;
// const host = process.env.DATABASE_HOST;
// const port = process.env.DATABASE_PORT;

/** Config Sequelize with MySQL*/
const sequelize = new Sequelize("sequelize_testing", "root", "", {
  host: "127.0.0.1",
  port: 3306,
  dialect: "mysql",
  define: {
    freezeTableName: true,
  },
});

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Connection to Database has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports.sequelize = sequelize;
module.exports.connect = connect;
