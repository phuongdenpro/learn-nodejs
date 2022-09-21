const configValues = require("./config.json");
module.exports = {
  getDbConnecttionString: function () {
    return `mongodb+srv://${configValues.username}:${configValues.password}@cluster0.hskxcsk.mongodb.net/testdatabase?retryWrites=true&w=majority`;
  }
};
