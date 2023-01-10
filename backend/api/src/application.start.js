require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { environment } = require("@config");
const routes = require("@routes");

const api = express();

api.use(bodyParser.json());

routes.forEach(route => {
    console.log(route);
    api[route.method](route.path, route.handler);
});

api.listen(environment.API_PORT, () => {
    console.log(`application listening on ${environment.API_HOST}:${environment.API_PORT}`);
}); 

module.exports = api;