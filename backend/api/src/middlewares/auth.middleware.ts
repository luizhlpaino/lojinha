import express from "express";

export default class AuthMiddleware {
    constructor(req: express.Request, res: express.Response, next: express.NextFunction) {                
        console.log(`before anything, you should authenticate...`);
        next();
    }
}