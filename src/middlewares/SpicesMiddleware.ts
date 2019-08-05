import { SpicesRequest } from '../requests/SpicesRequest';
import { Request,Response, NextFunction } from "express";
import { IMiddleware } from "./interfaces/IMiddleware";
export class SpicesMiddleware implements IMiddleware {
    public async request(req: Request, res: Response, next: NextFunction) {
        const spicesRequest : SpicesRequest = new SpicesRequest(req);
        const isFields: boolean =  spicesRequest.fields.every((isField) => isField === true);
        if(isFields) {
            next();
        } else {
            res.sendStatus(400);
        }
    }
}

export const spicesMiddleware: SpicesMiddleware = new SpicesMiddleware();
