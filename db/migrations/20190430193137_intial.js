exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('cities', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.integer('population');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('markets', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.string('address');
      table.string('time')
      table.integer('city_id').unsigned()
      table.foreign('city_id')
        .references('cities.id');

      table.timestamps(true, true);
    })
  ])
};


exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('markets'),
    knex.schema.dropTable('cities')
  ]);
};