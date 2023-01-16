import express from "express";

export default interface ILojinhaRoute {
    path: string;
    method: string;
    handler(req: express.Request, res: express.Response): void;    
}