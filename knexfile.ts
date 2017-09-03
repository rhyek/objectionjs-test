// Update with your config settings.

module.exports = {

  development: {
    client: "pg",
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'postgres',
      database: 'test_objection'
    },
    migrations: {
      directory: 'database/migrations'
    },
    seeds: {
      directory: 'database/seeds'
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};
