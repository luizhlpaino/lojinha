import { importDefaultModulesByFolder } from "@controllers/import.controller";
import { ILojinhaRoute } from "@routes";

export default class LojinhaRouter {
    private _routes: ILojinhaRoute[];

    constructor() {
        this._routes = [];
    }    

    public async setup() {    
        const routes = await importDefaultModulesByFolder(__dirname);
        this._routes = routes;                        
    }

    public getRoutes(): ILojinhaRoute[] {
        return this._routes;
    }
}