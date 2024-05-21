const Sequelize = require('sequelize')
require("dotenv").config;

const Connection = new Sequelize(process.env.DB_HOST, {
  dialect: "mysql",
  define: { timestamp: false },
});

module.exports = { Connection };
