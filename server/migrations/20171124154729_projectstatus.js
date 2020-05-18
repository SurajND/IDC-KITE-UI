exports.up = function (knex, Promise) {
  return knex.schema

    .createTable('users', (table) => {
      table.increments().primary();
      table.text('login').notNullable();
      table.text('password').notNullable();
      table.text('email').notNullable();
      table.boolean('isadmin').defaultTo(false).notNullable();
      table.datetime('datecreated').notNullable();
      table.datetime('lastlogin');
      table.text('sessionid');
    })

    .createTable('opco', (table) => {
      table.increments().primary();
      table.text('opco').notNullable();

    })

    .createTable('businessunit', (table) => {
      table.increments().primary();
      table.integer('opco_id').references('id').inTable('opco').notNull();
      table.text('businessunit').notNullable();
    })


    .createTable('projects', (table) => {
      table.increments().primary();
      table.integer('businessunit_id').references('id').inTable('businessunit').notNull();
      table.text('project').notNullable();      
      table.integer('otd').defaultTo(80).notNullable();
      table.integer('quality').defaultTo(80).notNullable();
      table.integer('user_id').references('id').inTable('users').nullable();
      table.datetime('datecreated').notNullable();
    })

    .createTable('projectstatus', (table) => {
      table.increments().primary();
      table.integer('project_id').references('id').inTable('projects').notNull().onDelete('cascade');
      table.integer('otd_monthly').nullable();
      table.integer('otd_target').notNullable();
      table.integer('quality_monthly').nullable();
      table.integer('quality_target').notNullable();
      table.integer('metricmonth').notNullable();
      table.integer('metricyear').notNullable();
      table.integer('metricorder').notNullable();
      table.datetime('datecreated').notNullable();
    });
};

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable('projectstatus')
    .dropTable('projects')    
    .dropTable('businessunit') 
    .dropTable('opco')   
    .dropTable('users');
};