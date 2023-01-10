const environment = require("@config/environment");

const pg = require('knex')({
    client: 'pg',
    connection: {
        host : environment.db.pg.host,
        port : environment.db.pg.port,
        user : environment.db.pg.username,
        password : environment.db.pg.password,
        database : environment.db.pg.dbname
    }
});

modules.exports = pg;