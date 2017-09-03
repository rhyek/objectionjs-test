"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const Knex = require("knex");
const knex = Knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'postgres',
        database: 'test_objection'
    }
});
objection_1.Model.knex(knex);
class Role extends objection_1.Model {
}
class User extends objection_1.Model {
}
User.tableName = 'users';
User.relationMappings = {
    roles: {
        relation: objection_1.Model.ManyToManyRelation,
        modelClass: Role,
        join: {
            from: 'users.id',
            through: {
                from: 'user_role.user_id',
                to: 'user_role.role_id'
            },
            to: 'roles.id'
        }
    }
};
async function main() {
    const users = await User.query().eager('roles');
    console.log(users[0].toJSON());
}
main();
