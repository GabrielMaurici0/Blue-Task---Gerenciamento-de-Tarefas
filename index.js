const Database = require("./Database/Database");

Database.Connection.authenticate()
  .then(() => {
    console.log("Conectou porra");
  })
  .catch((msgErro) => {
    console.log(msgErro);
  });
