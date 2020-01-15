
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

// eslint-disable-next-line import/no-dynamic-require
const config = require(path.join(__dirname, '/../config/config.js'))[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// fs
//   .readdirSync(__dirname)
//   .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
//   .forEach((file) => {
//     const model = sequelize.import(path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// sequelize association examples
//   sourceModel.hasOne(targetModel);
//  sourceModel.hasMany(targetModel);
//  targetModel.belongsTo(sourceTable);

db.clockin = require('../models/clockin')(sequelize, Sequelize);
db.employee = require('../models/employee')(sequelize, Sequelize);
db.leave_type = require('../models/leave_type')(sequelize, Sequelize);
db.pay_type = require('../models/pay_type')(sequelize, Sequelize);
db.timeoff = require('../models/timeoff')(sequelize, Sequelize);
db.working_status = require('../models/working_status')(sequelize, Sequelize);

// Relations
db.employee.belongsTo(db.working_status);
db.working_status.hasMany(db.employee);

db.employee.belongsTo(db.pay_type);
db.pay_type.hasMany(db.employee);

db.clockin.belongsTo(db.employee);
db.employee.hasMany(db.clockin);

db.timeoff.belongsTo(db.employee);
db.employee.hasMany(db.timeoff);

db.timeoff.belongsTo(db.leave_type);
db.leave_type.hasMany(db.timeoff);

module.exports = db;
