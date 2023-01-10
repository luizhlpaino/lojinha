const environment = require("@config/environment");

const mssql = require('knex')({
    client: 'mssql',
    connection: {
        host : environment.db.mssql.host,
        port : environment.db.mssql.port,
        user : environment.db.mssql.username,
        password : environment.db.mssql.password,
        database : environment.db.mssql.dbname
    }
});

modules.exports = mssql;