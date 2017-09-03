import * as objection from 'objection'
import { Model } from 'objection'
import * as Knex from 'knex'

const knex = Knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'test_objection'
  }
})
Model.knex(knex)

class Role extends Model {
  static tableName: 'roles'
  // for intellisense
  name: string
}

class User extends Model {
  static tableName = 'users'
  static relationMappings = {
    roles: {
      relation: Model.ManyToManyRelation,
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
  }
  // for intellisense
  name: string
  username: string
  password: string
  roles: Role[]
}

async function main () {
  const users = await User.query().eager('roles')
  console.log(users[0].toJSON())
}

main()
