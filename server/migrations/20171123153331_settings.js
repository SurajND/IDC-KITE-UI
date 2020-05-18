
exports.up = function(knex, Promise) {
    return knex.schema.createTable('settings', (table) => {
        table.increments().primary();
        table.text('opco').notNullable();
        table.text('businessunit').notNullable();
        table.text('project').notNullable();
        table.text('manager').notNullable();
        table.integer('otd').defaultTo(80).notNullable();
        table.integer('quality').defaultTo(80).notNullable();
        table.text('user');
        table.datetime('datecreated').notNullable();
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('settings');
};
