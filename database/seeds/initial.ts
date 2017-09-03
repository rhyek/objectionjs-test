import * as Knex from "knex";

exports.seed = async function (knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  await knex("users").del()
  const userId = await knex("users").insert([
    { name: 'Carlos', username: 'carlos', password: 'lmfao' }
  ], 'id');
  await knex('roles').del()
  const roleId = await knex('roles').insert([
    { name: 'admin' }
  ], 'id')
  await knex('user_role').del()
  await knex('user_role').insert([
    { user_id: Number(userId), role_id: Number(roleId) }
  ])
};
