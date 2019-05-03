
exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.table('markets', table => {
      table.dropColumn('time');
    })
  ])
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.table('markets', table => {
      table.strin('time');
    })
  ])
};
