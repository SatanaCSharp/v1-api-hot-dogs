import { StuffRequest } from '../requests/StuffRequest';
import { Request,Response, NextFunction } from "express";
import { IMiddleware } from "./interfaces/IMiddleware";
export class StuffMiddleware implements IMiddleware {
    public async request(req: Request, res: Response, next: NextFunction) {
        const stuffRequest: StuffRequest = new StuffRequest(req);
        const isFields: boolean = stuffRequest.fields.every((isField) => isField === true);
        if(isFields) {
            next();
        } else {
            res.sendStatus(400);
        }
    }
}

export const stuffMiddleware: StuffMiddleware = new StuffMiddleware();