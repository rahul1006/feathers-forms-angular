// Initializes the `contract` service on path `/contract`
const createService = require('feathers-sequelize');
const createModel = require('../../models/contract.model');
const hooks = require('./contract.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/contract', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('contract');

  service.hooks(hooks);
};
