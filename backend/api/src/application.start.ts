require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";

import environment from "@env";
import { LojinhaRouter, ILojinhaRoute } from "@routes";

import AuthMiddleware from "@middlewares/auth.middleware";

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
        this._server.use((req, res, next) => new AuthMiddleware(req, res, next));
    }

    private async setApiRoutes() {
        await this._router.setup();
        this._router.getRoutes().forEach((route: ILojinhaRoute) => {            
            console.log(`[${route.method.toUpperCase()}][${route.path}][${route.handler.name}]`);
            this._server[route.method](route.path, route.handler);            
        });        
    }    
}