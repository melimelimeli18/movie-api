const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const app = require('./core/server');
const { env, port } = require('./core/config');
const config = require('./core/config');
const logger = require('./core/logger')('app');

const connectionString = new URL(config.database.connection);
connectionString.pathname += config.database.name;

mongoose.connect(`${connectionString.toString()}`);

const db = mongoose.connection;
db.once('open', () => {
  logger.info('Successfully connected to MongoDB');
});

const dbExports = {};
dbExports.db = db;

const modelsPath = path.join(__dirname, 'models');

fs.readdirSync(modelsPath)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    const model = require(path.join(modelsPath, file))(mongoose);
    dbExports[model.modelName] = model;
  });

const server = app.listen(port, (err) => {
  if (err) {
    logger.fatal(err, 'Failed to start the server.');
    process.exit(1);
  } else {
    logger.info(`Server runs at port ${port} in ${env} environment`);
  }
});

module.exports = dbExports;

