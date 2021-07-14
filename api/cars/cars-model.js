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

const update = async (id, car) => {
  await db('cars').where({id}).update(car);
  return await getById(id);
};

const remove = async (id) => {
  return await db('cars').where({id}).del();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
