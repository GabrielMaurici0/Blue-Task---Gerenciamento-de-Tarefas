const { Sequelize, DataTypes } = require("sequelize");
const Database = require("./Database").default;

const Tarefa = Database.Connection.define("Tarefa", {
  tarseq: {
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  tarnom: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});
