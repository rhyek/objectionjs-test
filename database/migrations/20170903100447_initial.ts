import * as Knex from "knex";

exports.up = async function (knex: Knex) {
  await knex.schema.createTable('users', table => {
    table.increments()
    table.string('name')
    table.string('username')
    table.string('password')
  })

  await knex.schema.createTable('roles', table => {
    table.increments()
    table.string('name')
  })

  await knex.schema.createTable('user_role', table => {
    table.increments()
    table.integer('user_id').unsigned()
    table.integer('role_id').unsigned()
    table.foreign('user_id').references('users.id')
    table.foreign('role_id').references('roles.id')
  })
}

exports.down = async function (knex: Knex) {
  await knex.schema.dropTable('user_role')
  await knex.schema.dropTable('roles')
  await knex.schema.dropTable('users')
}