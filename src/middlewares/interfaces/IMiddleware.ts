import { Request,Response, NextFunction } from "express";
export interface IMiddleware {
    request(req: Request, res: Response, next: NextFunction): Promise<void>;
}