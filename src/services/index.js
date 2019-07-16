const contract = require('./contract/contract.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(contract);
};
