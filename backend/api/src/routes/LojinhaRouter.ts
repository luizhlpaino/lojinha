import { importDefaultModulesByFolder } from "@controllers/import.controller";
import { LojinhaRoute } from "@routes";

export default class LojinhaRouter {
    private _routes: LojinhaRoute[];

    constructor() {
        this._routes = [];
    }    

    public async setup() {    
        const routes = await importDefaultModulesByFolder(__dirname);
        this._routes = routes;                        
    }

    public getRoutes(): LojinhaRoute[] {
        return this._routes;
    }
}