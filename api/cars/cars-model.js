const db = require('../../data/db-config');

const getAll = async () => {
  return await db('cars');
};

const getById = async (id) => {
  return await db('cars').where({id}).first();
};

const create = async (car) => {
  // INSERT INTO cars ()
  const [newId] = await db('cars').insert(car);
  return await getById(newId);
};


module.exports = {
  getAll,
  getById,
  create
};
