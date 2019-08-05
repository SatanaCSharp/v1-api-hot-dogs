import { Request,Response,ErrorRequestHandler } from "express";

export class RoutesMiddleware {
    public unauthorized(err:ErrorRequestHandler, req: Request, res:Response):void {
        if(err.name === 'UnauthorizedError') {
            res.sendStatus(401);
        }
    }
    public notFound(req: Request, res:Response) {
        res.sendStatus(404);
    }
}
export const routesMiddleware = new RoutesMiddleware();