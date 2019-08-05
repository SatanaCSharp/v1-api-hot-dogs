import { HotDogsRequest } from '../requests/HotDogsRequest';
import { Request,Response, NextFunction } from "express";
import { IMiddleware } from "./interfaces/IMiddleware";
export class HotDogsMiddleware implements IMiddleware {
    public async request(req: Request, res: Response, next: NextFunction) {
        const hotDogsRequest: HotDogsRequest = new HotDogsRequest(req);
        const isFields: boolean = hotDogsRequest.fields.every((isField) => isField === true);
        if(isFields) {
            next();
        } else {
            res.sendStatus(400);
        }
    }
}

export const hotDogsMiddleware: HotDogsMiddleware = new HotDogsMiddleware();