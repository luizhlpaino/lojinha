require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";

const environment = require("./config/environment");
const { Authenticate } = require("./middlewares/auth.middleware");
import { LojinhaRouter, LojinhaRoute } from "@routes";


export default class LojinhaApplication {
    private _server: express.Application;
    private _router: LojinhaRouter;
    
    constructor() {
        this._server = express();
        this._router = new LojinhaRouter();
    }

    public async startServer() {
        this.setServerMiddlewares();
        await this.setApiRoutes();
        
        this._server.listen(environment.apiPort, () => {
            console.log(`Application listening on ${environment.apiHost}:${environment.apiPort}`);
        }); 
    }
    
    private setServerMiddlewares() {
        this._server.use(bodyParser.json());
        this._server.use((req, res, next) => Authenticate(req, res, next));
    }

    private async setApiRoutes() {
        await this._router.setup();
        this._router.getRoutes().forEach((route: LojinhaRoute) => {
            console.log(`[${route.method.toUpperCase()}][${route.path}][${route.handler.name}]`);
            this._server[route.method](route.path, route.handler);
        });        
    }    
}