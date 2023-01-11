/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: process.env.DEV_DB_CLIENT,
    connection: {
      host: process.env.DEV_DB_HOST,
      port: process.env.DEV_DB_PORT,
      database: process.env.DEV_DB_NAME,
      user: process.env.DEV_DB_USERNAME,
      password: process.env.DEV_DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: process.env.STAGE_DB_CLIENT,
    connection: {
      host: process.env.STAGE_DB_HOST,
      port: process.env.STAGE_DB_PORT,
      database: process.env.STAGE_DB_NAME,
      user: process.env.STAGE_DB_USERNAME,
      password: process.env.STAGE_DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: process.env.PROD_DB_CLIENT,
    connection: {
      host: process.env.PROD_DB_HOST,
      port: process.env.PROD_DB_PORT,
      database: process.env.PROD_DB_NAME,
      user: process.env.PROD_DB_USERNAME,
      password: process.env.PROD_DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
