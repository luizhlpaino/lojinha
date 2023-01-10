module.exports = {
    environment: "production",
    apiHost: process.env.API_HOST,
    apiPort: process.env.API_PORT,
    db: {
        pg: {
            host: process.env.POSTGRES_DB_HOST,
            dbname: process.env.POSTGRES_DB_NAME,
            username: process.env.POSTGRES_DB_USERNAME,
            password: process.env.POSTGRES_DB_PASSWORD,
            port: process.env.POSTGRES_DB_PORT,
        },
        mssql: {
            host: process.env.MSSQL_DB_HOST,
            dbname: process.env.MSSQL_DB_NAME,
            username: process.env.MSSQL_DB_USERNAME,
            password: process.env.MSSQL_DB_PASSWORD,
            port: process.env.MSSQL_DB_PORT,
        }
    }         
};