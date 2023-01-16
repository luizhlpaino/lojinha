import ILojinhaRoute from "@models/lojinha.route";
import { Request, Response } from "express";

class GetHealth implements ILojinhaRoute {
    path: string = "/health";
    method: string = "get";
    handler(req: Request, res: Response): void {
        res.send({ success: true });
    }
}

export default [
    new GetHealth()
]
    