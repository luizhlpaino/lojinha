require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
//const routes = require("@routes");

const environment = require("./config/environment");
const { Authenticate } = require("./middlewares/auth.middleware");
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
 
export default api;