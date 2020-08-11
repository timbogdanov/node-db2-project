exports.up = (knex) => {
  return knex.schema.createTable('cars', (table) => {
    table.increments('id').primary();

    table.string('vin', 17).notNullable().unique();
    table.string('make', 255).notNullable();
    table.string('model', 255).notNullable();
    table.string('mileage', 255).notNullable();

    table.string('transmission', 255);
    table.string('title', 255);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('cars');
};
