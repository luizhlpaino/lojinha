module.exports = {
    environment: "development",
    apiHost: process.env.API_HOST || "localhost",
    apiPort: process.env.API_PORT || "4000",
    db: {
        pg: {
            host: process.env.POSTGRES_DB_HOST || "",
            dbname: process.env.POSTGRES_DB_NAME || "",
            username: process.env.POSTGRES_DB_USERNAME || "",
            password: process.env.POSTGRES_DB_PASSWORD || "",
            port: process.env.POSTGRES_DB_PORT || "",
        },
        mssql: {
            host: process.env.MSSQL_DB_HOST || "",
            dbname: process.env.MSSQL_DB_NAME || "",
            username: process.env.MSSQL_DB_USERNAME || "",
            password: process.env.MSSQL_DB_PASSWORD || "",
            port: process.env.MSSQL_DB_PORT || "",
        }
    }        
};