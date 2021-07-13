const db = require('../../data/db-config');

console.log(db);
exports.getAll = async () => {
  return db('cars');
};

exports.getById = async (id) => {
  return db('cars').where({id}).first();
};

exports.create = async () => {
  return 'create wired';
};
