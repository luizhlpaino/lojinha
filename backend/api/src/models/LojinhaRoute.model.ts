export class LojinhaRoute {
    private _path: string = "";
    private _method: string = "";
    private _handler: Function = () => {};

    constructor(path: string, method: string, handler: Function) {
        this._path = path;
        this._method = method;
        this._handler = handler;
    }
    
    public get path() : string {
        return this._path;
    }
    
    public get method() : string {
        return this._method;
    }
    
    public get handler() : Function {
        return this._handler;
    }
}