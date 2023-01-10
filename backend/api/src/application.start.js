require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const environment = require("@config/environment");
const routes = require("@routes");
const { Authenticate } = require("@middlewares/auth.middleware");

const api = express();

api.use(bodyParser.json());
api.use((req, res, next) => Authenticate(req, res, next));

routes.forEach(route => {
    console.log(route);
    api[route.method](route.path, route.handler);
});

api.listen(environment.apiPort, () => {
    console.log(`application listening on ${environment.apiHost}:${environment.apiPort}`);
}); 

module.exports = api;