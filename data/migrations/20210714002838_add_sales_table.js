
exports.up = function(knex) {
  return knex.schema.createTable('sales', tbl => {
    tbl.increments();
    tbl.decimal('price')
      .unsigned()
      .notNullable();
    tbl.string('buyer')
      .notNullable();
    tbl.string('seller')
      .notNullable();
    tbl.integer('car_id')
      .unsigned()
      .notNullable();
    tbl.foreign('car_id')
      .references('cars.id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sales');
};
