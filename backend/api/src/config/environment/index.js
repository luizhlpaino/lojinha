const development = require("./development/development.env");
const production = require("./production/production.env");

const environments = {
    development,
    production
};

const environment = process.env.ENVIRONMENT;

module.exports = {
    environment: environment,
    apiHost: environments[environment].apiHost,
    apiPort: environments[environment].apiPort,
    db: {
        pg: {
            host: environments[environment].db.pg.host,
            dbname: environments[environment].db.pg.dbname,
            username: environments[environment].db.pg.username,
            password: environments[environment].db.pg.password,
            port: environments[environment].db.pg.port,
        },
        mssql: {
            host: environments[environment].db.mssql.host,
            dbname: environments[environment].db.mssql.dbname,
            username: environments[environment].db.mssql.username,
            password: environments[environment].db.mssql.password,
            port: environments[environment].db.mssql.port,
        }
    }
};